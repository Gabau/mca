import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepositry: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepositry.find();
  }

  async findUser(id: number): Promise<User> {
    return await this.usersRepositry.findOne(id);
  }

  async createUser(user: CreateUserDto): Promise<InsertResult> {
    return this.usersRepositry.insert(this.usersRepositry.create(user));
  }

  async removeUser(id: number): Promise<DeleteResult> {
    return this.usersRepositry.delete(id);
  }

  async updateUser(
    updateUser: CreateUserDto,
    id: number,
  ): Promise<UpdateResult> {
    return this.usersRepositry.update(id, updateUser);
  }
}
