import {
  Body,
  Controller,
  NotFoundException,
  BadRequestException,
  Param,
  ParseIntPipe,
  Post,
  Get,
  UsePipes,
  ValidationPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { productServices } from './product.service';
 
import {updateProductDto} from 'src/dtos/product/update.dto';  
 
import { product} from 'src/entity/product.entity';
import { createProductDto } from 'src/dtos/product/create.dto';
 

@Controller('product')
export class productController {
  constructor(private productServices: productServices) {}

  // get one product by its id

  @Get(':id')
  async getOneProduct(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<product> {
    return await this.productServices.getOneProduct(id);
  }
  // get all product
  @Get()
  async getProduct() {
    return await this.productServices.getALLProduct();
  }

  // create product
  @Post( )
   
  async create(@Body() data: createProductDto) {
    return await this.productServices.createProduct(data);
  }

  // update product by its id
  @Patch('update/:id')
 
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: updateProductDto,
  ) { 
    try {
      return await this.productServices.updateProduct(id, data);
    } catch (err) {
      throw new BadRequestException('something went wrong please try again');
    }
  }

  //delete product with id
  @Delete('delete/:id')
  async delete(@Param('id',ParseIntPipe)id:number){
       return this.productServices.deleteProduct(id)
  }

}