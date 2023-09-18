import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigVariables } from './config/config';

@Module({
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [ConfigVariables],
})
export class AppModule {}
