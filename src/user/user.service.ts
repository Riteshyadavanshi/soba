
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";

interface userData {
    firstName: string,
    lastName?: string,
    username: string,
    password: string
}
@Injectable()
export class userService {

    constructor(@InjectRepository(User) private users: Repository<User>) { }

    async createUser(user: userData) {
        return await this.users.save(user);
    }

    async findById(id: number) {
        try {
            return await this.users.find({
                where: {
                    id
                }
            })
        } catch (err) {
            throw (err);
        }

    }

    async findUser(username: string) {
        try {
            return await this.users.findOne({
                where: {
                    username
                }
            })
        } catch (err) {
            throw (err);
        }
    }

    async updateUser(id, data: any) {
        await this.users.update({id}, data);
      }
}