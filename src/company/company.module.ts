import { Module } from "@nestjs/common";
import { companyServices } from './company.service'
import { companyController } from "./company.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Company } from "src/entity/company.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([Company])

    ],
    providers: [companyServices],
    controllers: [companyController]

})


export class companyModule {





}