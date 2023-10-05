import { Controller, Post, Body, Get, Param, Patch, Delete, Query } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './types';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async register(@Body() createUserDTO: CreateUserDTO) {
    const user = await this.userService.register(createUserDTO);

    return user;
  }

  @Post('login')
  async login(@Body() loginDTO: { email: string; password: string }) {
    const user = await this.userService.login(loginDTO.email, loginDTO.password);

    if (!user) {
      return {
        success: false,
        message: 'Invalid email or password',
      };
    }

    return {
      success: true,
      user,
    };
  }

  @Get()
  async paginateUsers(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    const paginatedUsers = await this.userService.paginateUser(page, limit);

    return paginatedUsers;
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    const user = await this.userService.getUser(id);

    return user;
  }

  @Post('reset-password')
  async resetPassword(@Body('email') email: string): Promise<void> {
    await this.userService.resetPassword(email);
  }

  @Get('allusers')
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }


  @Patch(':id')
  async editUser(@Param('id') id: number, @Body() createUserDTO: CreateUserDTO) {
    const user = await this.userService.editUser(id, createUserDTO);

    return user;
  }
  @Get('filter')
  async filterUser(params: any): Promise<User[]> {
    return await this.userService.filterUser(params);
  }
  @Get('paginateuser')

  async paginateUser(page: number, limit: number): Promise<User[]> {
    return await this.userService.paginateUser(page, limit);
  }


  

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.userService.deleteUser(id);
  }

  
}
