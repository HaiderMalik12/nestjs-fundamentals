
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class SingupInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class LoginInput {
    email: string;
    password: string;
}

export class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export abstract class IQuery {
    abstract login(loginInput: LoginInput): LoginResponse | Promise<LoginResponse>;
}

export abstract class IMutation {
    abstract singup(singupInput: SingupInput): SignupResponse | Promise<SignupResponse>;
}

export class SignupResponse {
    email: string;
}

export class LoginResponse {
    acessToken: string;
}

type Nullable<T> = T | null;
