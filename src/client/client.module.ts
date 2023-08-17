import { Module } from "@nestjs/common";
import { clientServices } from './client.service'
import { clientController } from "./client.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "src/entity/client.entity";



@Module({
    imports: [
        TypeOrmModule.forFeature([Client])

    ],
    providers: [clientServices],
    controllers: [clientController]

})


export class clientModule {





}