import { Get, Module } from "@nestjs/common";
 import {vendorServices} from './vendor.service'
 import { vendorController } from "./vendor.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { vendor } from "src/entity/vendor.entity";
 


@Module({
    imports:[
        TypeOrmModule.forFeature([vendor])
        
    ],
    providers:[vendorServices],
    controllers:[vendorController]
    
})


export class vendorModule{
      


      

}