import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { updateCompanyDto } from 'src/dtos/company/update.dto';
import { Company } from 'src/entity/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class companyServices {

  constructor(@InjectRepository(Company) private readonly company: Repository<Company>) { }

  async getCompany(id: number) {
    return await this.company.findOne({
      where: {
        companyId: id,
      },
      relations: ['clients', 'products'],
    });
  }

  async getCompanies(): Promise<Company[]> {
    try {
      return await this.company.find();
    } catch (err) {
      throw (err);
    }
  }

  async createCompany(data) {
    try {
      return await this.company.save(data);
    } catch (err) {
      throw (err);
    }
  }

  async updateCompany(id: number, data: Partial<updateCompanyDto>) {
    try {
      return await this.company.update({ companyId: id }, data);
    } catch (err) {
      throw (err)
    }
  }

  async deleteCompany(id: number) {
    try {
      return await this.company.delete({ companyId: id });
    } catch (err) {
      throw (err);
    }
  }
}
