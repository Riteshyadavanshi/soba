import {
  Body,
  Controller,
  BadRequestException,
  Param,
  ParseIntPipe,
  Post,
  Get,
  Put,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { productAllotmentServices } from './productAllotment.service';
import { createProductAllotmentDto } from 'src/dtos/productAllotment/create.dto';
import { updateProductAllotmentDto } from 'src/dtos/productAllotment/update.dto';
import { productAllotment } from 'src/entity/productAllotment.entity';
import { Public } from '../auth/public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from './storage.config';

@Controller('productAllotment')
export class productAllotmentController {

  constructor(private productAllotmentServices: productAllotmentServices) { }

  @Get(':id')
  async getOneAllotedProduct(@Param('id', ParseIntPipe) id: number): Promise<productAllotment> {
    return await this.productAllotmentServices.getAllotedProduct(id);
  }

  @Get()
  @Public()
  async getproductAllotment() {
    return await this.productAllotmentServices.getAllotedProducts();
  }

  @Post()
  async create(@Body() data: createProductAllotmentDto) {
    return await this.productAllotmentServices.createAllotedProduct(data);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<updateProductAllotmentDto>) {
    return await this.productAllotmentServices.updateAllotedProduct(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.productAllotmentServices.deleteAllotedProduct(id)
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor("file", { storage }))
  async upload(@UploadedFile() file: Express.Multer.File) {
    return file;
  }
}

