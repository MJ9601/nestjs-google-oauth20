import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class UserSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  googleId: string;

  @PrimaryColumn()
  email: string;

  @Column()
  name: string;

  @Column()
  imageLink: string;

  @Column({ default: true })
  isVerified: boolean;
}
