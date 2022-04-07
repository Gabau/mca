import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findUser(@Param('id') id): Promise<User> {
    return this.usersService.findUser(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<InsertResult> {
    return this.usersService.createUser(createUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id): Promise<DeleteResult> {
    return this.usersService.removeUser(id);
  }

  @Put(':id')
  update(
    @Body() updateUserDto: CreateUserDto,
    @Param('id') id,
  ): Promise<UpdateResult> {
    return this.usersService.updateUser(updateUserDto, id);
  }
}
