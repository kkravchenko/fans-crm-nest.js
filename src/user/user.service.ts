import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(user: User): Promise<User> {
    return this.userModel.create(user);
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({ where: { id } });
  }
}
