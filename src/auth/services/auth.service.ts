import { Injectable } from '@nestjs/common';
import { UserDetails } from 'src/dtos/user.dto';
import { UserSchema } from 'src/typeorm/entities/User.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserSchema)
    private readonly userRepository: Repository<UserSchema>,
  ) {}

  async validateUser(userInfo: UserDetails) {
    console.log(userInfo);

    const user = await this.userRepository.findOneBy({ email: userInfo.email });
    if (user) {
      const updatedUser = await this.userRepository.update(
        { email: userInfo.email },
        { ...userInfo },
      );

      return updatedUser;
    }

    const newUser = this.userRepository.create(userInfo);
    return this.userRepository.save(newUser);
  }

  async findUser(id: number) {
    return this.userRepository.findOneBy({ id });
  }
}
