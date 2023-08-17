import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class createProductDto {

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  details: string;

  @IsNumber()
  @IsNotEmpty()
  rate: string;

  @IsNumber()
  @IsNotEmpty()
  code: number;

  @IsNumber()
  @IsNotEmpty()
  billNo: number;

  @IsNumber()
  @IsNotEmpty()
  runNo: number;

  @IsOptional()
  @IsString()
  embroidary: string;

  @IsNumber()
  @IsOptional()
  size: number;

  @IsNumber()
  @IsOptional()
  average: number;

  @IsNumber()
  @IsOptional()
  totalAmount: number;

  @IsNumber()
  @IsNotEmpty()
  companyId: number;

  @IsString()
  @IsOptional()
  canvas: string;

  @IsString()
  @IsOptional()
  fittingStich: string;

  @IsString()
  @IsOptional()
  buttonStich: string;

  @IsString()
  @IsOptional()
  print: string;

  @IsString()
  @IsOptional()
  printex: string;

  @IsString()
  @IsOptional()
  kMaking: string;

  @IsString()
  @IsOptional()
  tag: string;

  @IsString()
  @IsOptional()
  productImage: string;

  @IsString()
  @IsOptional()
  label: string;

  @IsString()
  @IsOptional()
  making: string;
}
