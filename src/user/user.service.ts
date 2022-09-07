import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserAddress } from './user-address.enum';
import { User } from './user.entity';
import { GetUsersFilterDto } from './dto/get-users-filter.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    const found = await this.usersRepository.find();

    if (!found) {
      throw new NotFoundException();
    } else {
      return found;
    }
  }

  async getUserById(id: string): Promise<User> {
    const found = await this.usersRepository.findOne(id);

    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, email, password, phone } = createUserDto;

    const user = this.usersRepository.create({
      username,
      email,
      password,
      phone,
      address: UserAddress.BILLING_ADDRESS,
    });
    await this.usersRepository.save(user);
    return user;
  }

  async deleteUser(id: string): Promise<void> {
    const result = await this.usersRepository.delete(id);
    // console.log(result);
    if (result.affected === 0) {
      throw new NotFoundException();
    }
  }

  async updateUserAddress(id: string, address: UserAddress): Promise<User> {
    const user = await this.getUserById(id);

    user.address = address;
    await this.usersRepository.save(user);

    return user;
  }
}
