import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from '../guards/googleAuth.guard';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { msg: 'google login' };
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect() {
    return { msg: 'OK' };
  }
}
