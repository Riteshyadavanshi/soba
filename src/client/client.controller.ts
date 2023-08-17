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
import { clientServices } from './client.service';
import { updateClientDto } from 'src/dtos/client/update.dto';
import { Client } from 'src/entity/client.entity';
import { createClientDto } from 'src/dtos/client/create.dto';

@Controller('client')
export class clientController {

  constructor(private clientServices: clientServices) { }

  @Get(':id')
  async getOneClient(@Param('id', ParseIntPipe) id: number): Promise<Client> {
    return await this.clientServices.getClient(id);
  }

  @Get()
  async getClient(@Query('companyId', ParseIntPipe) companyId: number) {
    return await this.clientServices.getClients(companyId);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() data: createClientDto) {
    return await this.clientServices.createClient(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: updateClientDto) {
    return await this.clientServices.updateClient(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.clientServices.deleteclient(id)
  }

}
