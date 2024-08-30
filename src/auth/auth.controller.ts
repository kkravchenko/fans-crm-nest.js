import { Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Req() req, @Res() res) {
    const user = req.body; // Здесь должна быть логика аутентификации
    const token = await this.authService.generateToken(user);
    return res.json(token);
  }
}
