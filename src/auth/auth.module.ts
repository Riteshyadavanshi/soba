import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authcontroller } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { userService } from 'src/user/user.service';
import { User } from 'src/entity/user.entity';
import { jwtStrategy ,refreshStrategy} from './jwtStrategy.strategy';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      inject:[ConfigService],
      useFactory:async(configService:ConfigService)=>({
        secret: configService.get('jwtSecret') ,
      signOptions: {
        expiresIn: '1d',
      },
      })
      
    }),
    PassportModule,
  ],
  controllers: [authcontroller],
  providers: [AuthService, userService, jwtStrategy,refreshStrategy],
})
export class AuthModule {}
