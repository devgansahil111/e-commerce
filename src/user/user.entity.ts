import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserAddress } from './user-address.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  address: UserAddress;
}
