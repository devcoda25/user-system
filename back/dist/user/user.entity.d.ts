export declare enum UserType {
    ADMIN = "admin",
    USER = "user",
    SUPER = "super"
}
export declare class User {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: Date;
    placeOfResidence: string;
    email: string;
    password: string;
    contact: string[];
    createdAt: Date;
    updatedAt: Date;
    userType: UserType | undefined;
    user_age: number;
}
