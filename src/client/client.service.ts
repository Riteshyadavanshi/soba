import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { updateClientDto } from 'src/dtos/client/update.dto';
import { Client } from 'src/entity/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class clientServices {

  constructor(@InjectRepository(Client) private readonly client: Repository<Client>) { }

  async getClient(id: number) {
    try {
      return await this.client.findOne({
        where: {
          clientId: id,

        }, relations: ["company"]
      });
    } catch (err) {
      throw (err)
    }
  }

  async getClients(id): Promise<Client[]> {
    try {
      return (await this.client.find({ relations: ["company"] })).filter(client => client.company.companyId === id);
    } catch (err) {
      throw (err)
    }
  }

  async createClient(data) {
    try {
      return await this.client.save(data);
    } catch (err) {
      throw (err);
    }
  }

  async updateClient(id: number, data: Partial<updateClientDto>) {
    try {
      return this.client.update({ clientId: id }, data);

    } catch (err) {
      throw (err)
    }
  }

  async deleteclient(id: number) {
    try {
      return await this.client.delete({ clientId: id })
    } catch (err) {
      throw (err)
    }
  }
}
