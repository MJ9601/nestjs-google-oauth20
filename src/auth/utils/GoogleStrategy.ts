import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config/dist';
import { AuthService } from '../services/auth.service';

@Injectable()
export class GoogleOauthStartegy extends PassportStrategy(Strategy) {
  constructor(
    private config: ConfigService,
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super({
      clientID: config.get('GOOGLE_CLIENT_ID'),
      clientSecret: config.get('GOOGLE_SECRET'),
      callbackURL: 'http://localhost:3001/api/auth/google/redirect',
      scope: ['profile', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const user = await this.authService.validateUser({
      email: profile.emails[0].value,
      isVerified: Boolean(profile._json.email_verified),
      googleId: profile.id,
      name: profile.displayName,
      imageLink: profile.photos[0].value,
    });

    console.log(user);

    return user || null;
  }
}
