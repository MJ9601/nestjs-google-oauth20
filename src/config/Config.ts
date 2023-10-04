import { ConfigService } from '@nestjs/config/dist';

export class AppConfigVariables {
  config = new ConfigService();

  clientId = this.config.get('GOOGLE_CLIENT_ID');
  secret = this.config.get('GOOGLE_SECRET');
  callbackURL = 'http://localhost:3001/api/auth/google/redirect';
  scope = ['profile', 'email'];

  dbUser = this.config.get('DB_USER');
  dbPassword = this.config.get('DB_PASSWORD');
  dbPort = this.config.get('DB_PORT');
  dbHost = this.config.get('DB_HOST');
  dbName = this.config.get('DB_NAME');

  dbURL = `mysql://${this.dbUser}:${this.dbPassword}@${this.dbHost}:${this.dbPort}/${this.dbName}`;
}
