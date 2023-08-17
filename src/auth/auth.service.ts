import {
  Injectable,
  Request,
  NotFoundException,
  HttpException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { userService } from 'src/user/user.service';

interface userData {
  firstName: string;
  lastName?: string;
  username: string;
  password: string;
}

interface login {
  username: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private user: userService, private jwt: JwtService) {}

  async create(user: userData) {
    const newUser = await this.user.createUser(user);
    const payload = {
      id: newUser.id,
      username: newUser.username,
    };
    const { accessToken, refreshToken } = await this.generateToken(payload);
    await this.updateRefreshToken(newUser.id, refreshToken);
    return {
      accessToken,
      refreshToken,
    };
  }

  async login(loginData: login) {
    const { username, password } = loginData;
    const isUser = await this.user.findUser(username);
    if (!isUser) {
      throw new NotFoundException('user not found');
    }
    const isValidPassword = password == isUser.password;
    if (!isValidPassword) {
      throw new HttpException('user or password not matched', 404);
    }
    const { accessToken, refreshToken } = await this.generateToken({
      id: isUser.id,
      username: isUser.username,
    });
    await this.updateRefreshToken(isUser.id, refreshToken);
    return {
      accessToken,
      refreshToken,
    };
  }

  async refresh(id) {
    try {
      const [isUser ]= await this.user.findById(id);

      const { accessToken, refreshToken } = await this.generateToken({
        id: id,
        username: isUser.username,
      });
      await this.updateRefreshToken(isUser.id, refreshToken);
      return {
        accessToken,
        refreshToken,
      };
    } catch (err) {
      throw err;
    }
  }

  async generateToken(payload) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwt.signAsync(payload, { expiresIn: '1d' }),
      await this.jwt.signAsync(payload, { expiresIn: '2m', secret: 'hdfc' }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async updateRefreshToken(id, refreshToken: string) {
    try {
      await this.user.updateUser(id, { refreshToken });
    } catch (err) {
      throw err;
    }
  }
}
