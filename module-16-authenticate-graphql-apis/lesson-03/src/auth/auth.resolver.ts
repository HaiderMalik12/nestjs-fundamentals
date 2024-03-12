import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import {
  SignupResponse,
  SignupInput,
  LoginInput,
  LoginResponse,
  Profile,
} from 'src/graphql';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { UseGuards } from '@nestjs/common';
import { GraphQLAuthGaurd } from './gql-auth-guard';

@Resolver()
export class AuthResolver {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  @Mutation('signup')
  singupUser(
    @Args('signupInput')
    signupInput: SignupInput,
  ): Promise<SignupResponse> {
    return this.userService.create(signupInput);
  }
  @Query('login')
  loginUser(
    @Args('loginInput')
    loginInput: LoginInput,
  ): Promise<LoginResponse> {
    return this.authService.login(loginInput);
  }

  @Query('profile')
  @UseGuards(GraphQLAuthGaurd)
  getProfile(parent, args, contextValue, info): Profile {
    console.log(parent);
    console.log(args);
    console.log(contextValue);
    console.log(info);
    return contextValue.req.user;
  }
}
