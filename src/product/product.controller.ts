import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Get,

  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { productServices } from './product.service';
import { updateProductDto } from 'src/dtos/product/update.dto';
import { product } from 'src/entity/product.entity';
import { createProductDto } from 'src/dtos/product/create.dto';


@Controller('product')
export class productController {

  constructor(private productServices: productServices) { }

  @Get(':id')
  async getProduct(@Param('id', ParseIntPipe) id: number): Promise<product> {
    return await this.productServices.getProduct(id);
  }

  @Get()
  async getProducts(@Query('companyId', ParseIntPipe) companyId: number) {
    return await this.productServices.getProducts(companyId);
  }

  @Post()
  async create(@Body() data: createProductDto) {
    return await this.productServices.createProduct(data);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: updateProductDto) {
    return await this.productServices.updateProduct(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.productServices.deleteProduct(id)
  }
}
