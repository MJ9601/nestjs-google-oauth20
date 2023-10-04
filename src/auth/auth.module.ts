import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { GoogleOauthStartegy } from './utils/GoogleStrategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from 'src/typeorm/entities/User.schema';
import { SessionSerializer } from './utils/Serialiser';
@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [AuthController],
  providers: [
    GoogleOauthStartegy,
    SessionSerializer,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
