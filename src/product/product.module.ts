import { Get, Module } from "@nestjs/common";
 import {productServices} from './product.service'
 import { productController } from "./product.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { product } from "src/entity/product.entity";
 


@Module({
    imports:[
        TypeOrmModule.forFeature([product])
        
    ],
    providers:[productServices],
    controllers:[productController]
    
})


export class productModule{
      


      

}