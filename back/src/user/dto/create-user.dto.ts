import { IsString,IsNumber ,IsDate } from 'class-validator';
import { UserType } from "src/user/user.entity";

export class CreateUserDTO {
  @IsString()
  firstName: string;

  @IsString()
  middleName: string;

  @IsString()
  lastName: string;

  

  @IsString()
  email: string;

  @IsString()
  placeOfResidence: string;


  @IsString()
  userType: UserType | undefined;


  @IsString()
  password: string;

  @IsString()
  contact: string[];



  @IsNumber()
  user_age: number;

  @IsDate()
  dateOfBirth: Date;

  constructor() {
    this.firstName = '';
    this.middleName = '';
    this.lastName = '';
    
    this.email = '';
    this.placeOfResidence = '';
    this.userType = UserType.USER;
    
    this.password = '';
    this.contact = [];
    this.user_age = 0;
    this.dateOfBirth = new Date();

  }



}
