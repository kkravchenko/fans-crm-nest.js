import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateToken(user: any) {
    const payload: JwtPayload = {
      username: user.username,
      sub: user.userId || 1,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // Валидация пользователя из базы данных
    return { userId: payload.sub, username: payload.username };
  }
}
