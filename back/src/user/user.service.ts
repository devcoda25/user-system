import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import {  Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';



@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    

  ) {}

  async register(createUserDto: CreateUserDTO): Promise<User> {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.middleName = createUserDto.middleName;
    user.lastName = createUserDto.lastName;
    // Convert the date string to a Date object
    user.dateOfBirth = new Date(createUserDto.dateOfBirth);
    user.placeOfResidence = createUserDto.placeOfResidence;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.contact = createUserDto.contact;
    user.userType = createUserDto.userType;

    // Hash the password
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    user.password = hashedPassword;

    

  
    // Check if the dateOfBirth property is defined
    if (user.dateOfBirth) {
      // Check if the dateOfBirth property is a Date object
      if (user.dateOfBirth instanceof Date) {
        // Check if the getFullYear() method is available on the dateOfBirth property
        if (user.dateOfBirth.getFullYear) {
          // Calculate the user's age
          user.user_age = this.calculateAge(user.dateOfBirth);
        } else {
          // Throw an error
          throw new Error('The getFullYear() method is not available on the dateOfBirth property');
        }
      } else {
        // Throw an error
        throw new Error('The dateOfBirth property is not a Date object');
      }
    } else {
      // Throw an error
      throw new Error('The dateOfBirth property is not defined');
    }
  
    // Save the user
    await this.userRepository.save(user);
  
    return user;
  }
  

  calculateAge(dateOfBirth: Date): number {
    const today = new Date();
    const age = today.getFullYear() - dateOfBirth.getFullYear();
    if (today.getMonth() < dateOfBirth.getMonth()) {
      return age - 1; // Assign the value to 'this.age'
    } else {
      return age; // Assign the value to 'this.age'
    }
  }




  async login(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: { email },
    });

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return null;
    }

    return user;
  }

  async resetPassword(email: string): Promise<void> {
    const user = await this.userRepository.findOne({
      where: { email },
    });

    if (!user) {
      return;
    }

    user.password = await bcrypt.hash('password123', 10);

    await this.userRepository.save(user);
  }

  async deleteUser(userId: number): Promise<void> {
    await this.userRepository.delete(userId);
  }

  async editUser(userId: number, createUserDto: CreateUserDTO): Promise<User> {
    const user: User = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.placeOfResidence = createUserDto.placeOfResidence;
    user.contact = createUserDto.contact;
    user.dateOfBirth = createUserDto.dateOfBirth;
    user.user_age = createUserDto.user_age;
    user.userType = createUserDto.userType;

    await this.userRepository.save(user);

    return user;
  }

  

  async searchUser(query: string): Promise<User[]> {
    return await this.userRepository.find({
      where: {
        firstName: query,
        lastName: query,
      },
    });
  }

  async filterUser(params: any): Promise<User[]> {
    return await this.userRepository.find(params);
  }

  async paginateUser(page: number, limit: number): Promise<User[]> {
    return await this.userRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  // Added the following method
  async getUser(userId: number): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }



}
