import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { updateVendorDto } from 'src/dtos/vendor/update.dto';
import { vendor } from 'src/entity/vendor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class vendorServices {

  constructor(@InjectRepository(vendor) private readonly vendor: Repository<vendor>) { }

  async getOnevendor(id: number) {
    try {
      return await this.vendor.findOne({
        where: {
          vendorId: id,
        },
      });
    } catch (err) {
      throw (err);
    }
  }

  async getVendors(id: number): Promise<vendor[]> {
    try {
      return await this.vendor.find({ where: { companyId: id } });
    } catch (err) {
      throw (err);
    }
  }

  async createvendor(data) {
    try {
      return await this.vendor.save(data);
    } catch (err) {
      throw (err);
    }
  }

  async updatevendor(id: number, data: Partial<updateVendorDto>) {
    try {
      return this.vendor.update({ vendorId: id }, data);
    } catch (err) {
      throw (err);
    }

  }

  async deleteVendor(id: number) {
    try {
      return await this.vendor.delete({ vendorId: id })
    } catch (err) {
      throw (err);
    }
  }

  async getCompanyVendors(id: number) {
    return await this.vendor.find({ where: { companyId: id } })


  }
}
