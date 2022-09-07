import { UserAddress } from '../user-address.enum';
import { IsEnum } from 'class-validator';

export class UpdateUserAddressDto {
  @IsEnum(UserAddress)
  address: UserAddress;
}
