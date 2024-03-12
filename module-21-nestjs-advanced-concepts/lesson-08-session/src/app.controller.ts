import {
  Controller,
  Get,
  Post,
  HttpStatus,
  ParseFilePipeBuilder,
  UploadedFile,
  UseInterceptors,
  Req,
  Res,
  Session,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { User } from './user.decorator';
import { UserEntity } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload/files',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return {
      messge: 'file uploaded successfully!',
    };
  }

  // only want to accept png file
  @Post('upload-png')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload/files',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  uploadPngFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'png',
        })
        // .addMaxSizeValidator({
        //   maxSize: 70706,
        // })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
  ) {
    console.log(file);
    return {
      messge: 'file uploaded successfully!',
    };
  }

  @Get('/user/:id')
  findOne(
    @User()
    user: UserEntity,
  ) {
    console.log(user);
    return user;
  }

  @Get('get-cookie')
  finndAll(@Req() req: Request) {
    console.log(req.cookies);
    return req.cookies;
  }

  @Get('set-cookie')
  setCookie(
    @Res({ passthrough: true })
    response: Response,
  ) {
    response.cookie(
      'userId',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    );
    response.send('Cookie Saved Successfully');
  }

  @Get('login')
  loginUser(@Session() session: Record<string, any>) {
    session.user = { id: 1, username: 'Jane' };
    return 'LoggedIn';
  }

  @Get('profile')
  profile(@Session() session: Record<string, any>) {
    const user = session.user;
    if (user) {
      return `Hello, ${user.username}`;
    } else {
      return 'Not logged in';
    }
  }
}
