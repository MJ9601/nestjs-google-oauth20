import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { ConfigVariables } from 'src/config/config';
import { ConfigService } from '@nestjs/config/dist';

@Injectable()
export class GoogleOauthStartegy extends PassportStrategy(Strategy) {
  constructor(private config: ConfigService) {
    super({
      clientID: config.get('GOOGLE_CLIENT_ID'),
      clientSecret: config.get('GOOGLE_SECRET'),
      callbackURL: 'http://localhost:3001/api/auth/google/redirect',
      scope: ['profile', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log({ accessToken, refreshToken, profile });
  }
}
