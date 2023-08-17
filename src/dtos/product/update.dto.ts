import { IsOptional, IsString, IsNumber } from 'class-validator';

export class updateProductDto {

  @IsString()
  @IsOptional()
  date: string;

  @IsString()
  @IsOptional()
  details: string;

  @IsNumber()
  @IsOptional()
  rate: number;

  @IsNumber()
  @IsOptional()
  code: number;

  @IsNumber()
  @IsOptional()
  billNo: number;

  @IsNumber()
  @IsOptional()
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
  @IsOptional()
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