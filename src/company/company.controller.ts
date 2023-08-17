import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Get,
  UsePipes,
  ValidationPipe,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { companyServices } from './company.service';
import { createCompanyDto } from 'src/dtos/company/create.dto';
import { updateCompanyDto } from 'src/dtos/company/update.dto';
import { Company } from 'src/entity/company.entity';
import { Public } from '../auth/public.decorator';

@Controller('company')

export class companyController {

  constructor(private companyServices: companyServices) { }

  @Get(':id')
  async getOneComapany(@Param('id', ParseIntPipe) id: number): Promise<Company> {
    return await this.companyServices.getCompany(id);
  }

  @Get()
  @Public()
  async getCompany() {
    return await this.companyServices.getCompanies();
  }

  @Post()
  async create(@Body() data: createCompanyDto) {
    return await this.companyServices.createCompany(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: updateCompanyDto) {
    return await this.companyServices.updateCompany(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.companyServices.deleteCompany(id)
  }
}
