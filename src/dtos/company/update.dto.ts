import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class updateCompanyDto {

  @IsString()
  @IsOptional()
  companyName: string;

  @IsString()
  @IsOptional()
  gst: string;

  @IsString()
  @IsOptional()
  contact: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  state: string;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsNotEmpty()
  pinCode: string;
}
