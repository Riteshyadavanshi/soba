import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './entity/user.entity';
import { userModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from '../config';

import { Company } from './entity/company.entity';
import { companyModule } from './company/company.module';
import { clientModule } from './client/client.module';
import { Client } from './entity/client.entity';
import { vendorModule } from './vendor/vendor.module';
import { vendor } from './entity/vendor.entity';
import { productModule } from './product/product.module';
import { productAllotment } from './entity/productAllotment.entity';
import { productAllotmentModule } from './productAlllotment/productAllotment.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        username: configService.get("user"),
        password: configService.get('password'),
        host: configService.get('host'),
        port: configService.get('dbPort'),
        database: configService.get('database'),
        autoLoadEntities: true,
        dropSchema:true,
        synchronize: true,
        entities: [User, Company, Client, vendor, productAllotment],
        // logging: true,
      }),
    }),
    companyModule,
    AuthModule,
    userModule,
    clientModule,
    vendorModule,
    productModule,
    productAllotmentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
