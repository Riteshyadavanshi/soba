import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { userDto } from 'src/dtos/user/user.dto';
import { loginDto } from 'src/dtos/user/login.dto';

import { Public } from './public.decorator';
import { refreshAuth } from './jwtAuth.guard';

@Controller('auth')
export class authcontroller {

  constructor(private authServices: AuthService) { }

  @Post('register')
  @Public()
  async register(@Body() user: userDto) {
    return await this.authServices.create(user);
  }

  @Post('login')
  @Public()
  async Login(@Body() loginDto: loginDto) {
    return this.authServices.login(loginDto);
  }
  
  
  @Post('refresh')
  @Public()
  @UseGuards( new refreshAuth("jwt-refresh"))
  async  refreshLogin(@Req() req ){
          
           return await this.authServices.refresh(req.user.id)
          
  }

}
