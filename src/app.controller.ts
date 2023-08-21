import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SignUpUserDTO } from './dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/sign-up")
  @HttpCode(HttpStatus.OK)
  signUp(@Body() body: SignUpUserDTO) {
    try {
      return this.appService.signUp(body);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
