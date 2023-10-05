"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async register(createUserDto) {
        const user = new user_entity_1.User();
        user.firstName = createUserDto.firstName;
        user.middleName = createUserDto.middleName;
        user.lastName = createUserDto.lastName;
        user.dateOfBirth = new Date(createUserDto.dateOfBirth);
        user.placeOfResidence = createUserDto.placeOfResidence;
        user.email = createUserDto.email;
        user.password = createUserDto.password;
        user.contact = createUserDto.contact;
        user.userType = createUserDto.userType;
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        user.password = hashedPassword;
        if (user.dateOfBirth) {
            if (user.dateOfBirth instanceof Date) {
                if (user.dateOfBirth.getFullYear) {
                    user.user_age = this.calculateAge(user.dateOfBirth);
                }
                else {
                    throw new Error('The getFullYear() method is not available on the dateOfBirth property');
                }
            }
            else {
                throw new Error('The dateOfBirth property is not a Date object');
            }
        }
        else {
            throw new Error('The dateOfBirth property is not defined');
        }
        await this.userRepository.save(user);
        return user;
    }
    calculateAge(dateOfBirth) {
        const today = new Date();
        const age = today.getFullYear() - dateOfBirth.getFullYear();
        if (today.getMonth() < dateOfBirth.getMonth()) {
            return age - 1;
        }
        else {
            return age;
        }
    }
    async login(email, password) {
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
    async resetPassword(email) {
        const user = await this.userRepository.findOne({
            where: { email },
        });
        if (!user) {
            return;
        }
        user.password = await bcrypt.hash('password123', 10);
        await this.userRepository.save(user);
    }
    async deleteUser(userId) {
        await this.userRepository.delete(userId);
    }
    async editUser(userId, createUserDto) {
        const user = await this.userRepository.findOne({
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
    async searchUser(query) {
        return await this.userRepository.find({
            where: {
                firstName: query,
                lastName: query,
            },
        });
    }
    async filterUser(params) {
        return await this.userRepository.find(params);
    }
    async paginateUser(page, limit) {
        return await this.userRepository.find({
            skip: (page - 1) * limit,
            take: limit,
        });
    }
    async getUser(userId) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        return user;
    }
    async getAllUsers() {
        return this.userRepository.find();
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map