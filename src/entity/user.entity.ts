import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ name: 'userId' })
  id;

  @Column({ unique: true })
  username: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'firstName' })
  firstName: string;

  @Column({ nullable: true, name: 'lastName' })
  lastName: string;
  @Column({   name: 'refreshToken',default:'' })
  refreshToken: string;
}
