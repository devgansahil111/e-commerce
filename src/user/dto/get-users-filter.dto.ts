import { UserAddress } from '../user-address.enum';
import { IsOptional, IsEnum, IsString } from 'class-validator';

export class GetUsersFilterDto {
  @IsOptional()
  @IsEnum(UserAddress)
  address?: UserAddress;

  @IsOptional()
  @IsString()
  search?: string;
}
