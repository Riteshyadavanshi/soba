import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { updateProductAllotmentDto } from 'src/dtos/productAllotment/update.dto';
import { productAllotment } from 'src/entity/productAllotment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class productAllotmentServices {

  constructor(@InjectRepository(productAllotment) private readonly productAllotment: Repository<productAllotment>) { }

  async getAllotedProduct(id: number) {
    try {
      return await this.productAllotment.findOne({
        where: {
          productAllotmentId: id,
        },
      });
    } catch (err) {
      throw (err);
    }
  }

  async getAllotedProducts(): Promise<productAllotment[]> {
    try {
      return await this.productAllotment.find();
    } catch (err) {
      throw (err)
    }
  }

  async createAllotedProduct(data) {
    try {
      return await this.productAllotment.save(data);
    } catch (err) {
      throw (err)
    }
  }

  async updateAllotedProduct(id: number, data: Partial<updateProductAllotmentDto>) {
    try {

      return await this.productAllotment.update({ productAllotmentId: id }, data);
    } catch (err) {
      throw (err)
    }
  }

  async deleteAllotedProduct(id: number) {
    return await this.productAllotment.delete({ productAllotmentId: id });
  }
}
