import { UserType } from "src/user/user.entity";
export declare class CreateUserDTO {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    placeOfResidence: string;
    userType: UserType | undefined;
    password: string;
    contact: string[];
    user_age: number;
    dateOfBirth: Date;
    constructor();
}
