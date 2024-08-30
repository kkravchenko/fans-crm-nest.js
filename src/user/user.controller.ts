import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/v1')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add-user')
  @UseGuards(JwtAuthGuard)
  async createUser(@Body() user: User): Promise<User> {
    const newUser = await this.userService.create(user);
    console.log('newUser: ', newUser);
    return newUser;
  }

  @Get('get-user/:id')
  @UseGuards(JwtAuthGuard)
  async getUser(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }
}
