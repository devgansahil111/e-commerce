import { Repository, EntityRepository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserAddress } from './user-address.enum';
import { GetUsersFilterDto } from './dto/get-users-filter.dto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, email, password, phone } = createUserDto;

    const user = this.create({
      username,
      email,
      password,
      phone,
      address: UserAddress.BILLING_ADDRESS,
    });
    await this.save(user);
    return user;
  }
}
