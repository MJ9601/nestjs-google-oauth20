import { PassportSerializer } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserSchema } from 'src/typeorm/entities/User.schema';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super();
  }

  serializeUser(user: UserSchema, done: Function) {
    done(null, user);
  }

  async deserializeUser(payload: UserSchema, done: Function) {
    const user = await this.authService.findUser(payload.id);

    return user ? done(null, user) : done(null, null);
  }
}
