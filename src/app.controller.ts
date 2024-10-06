import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { Public } from './decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  // @UseGuards(AuthGuard) // use this if the auth guard is not set to global
  @Get('protected')
  getProfile(@Request() req) {
    return req.user;
  }
}
