import { Get, Module } from "@nestjs/common";
 import {productAllotmentServices} from './productAllotment.service'
 import { productAllotmentController } from "./productAllotment.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { productAllotment } from "src/entity/productAllotment.entity";


@Module({
    imports:[
        TypeOrmModule.forFeature([productAllotment])
        
    ],
    providers:[productAllotmentServices],
    controllers:[productAllotmentController]
    
})


export class productAllotmentModule{
      


      

}