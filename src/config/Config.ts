import { ConfigService } from '@nestjs/config/dist';

export class ConfigVariables {
  config = new ConfigService();

  clientId = this.config.get('GOOGLE_CLIENT_ID');
  secret = this.config.get('GOOGLE_SECRET');
  callbackURL = 'http://localhost:3001/api/auth/google/redirect';
  scope = ['profile', 'email'];
}
