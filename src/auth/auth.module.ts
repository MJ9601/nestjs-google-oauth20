import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { GoogleOauthStartegy } from './utils/GoogleStrategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, GoogleOauthStartegy],
})
export class AuthModule {}
