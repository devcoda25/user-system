import { UserType } from "./user.entity";
export type User = {
    id: number;
    firstName: string;
    email: string;
    lastName: string;
    middleName: string;
    userType: UserType;
    user_age: number;
};
