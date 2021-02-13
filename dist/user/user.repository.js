"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async createUser(createUserDto) {
        const checkExistUser = await this.findOne({
            where: { name_user: createUserDto.nameUser },
        });
        if (checkExistUser) {
            throw new common_1.BadRequestException('Username have already exist !!!');
        }
        const newUser = new user_entity_1.UserEntity();
        newUser.id_user = uuid_1.v4();
        newUser.name_user = createUserDto.nameUser;
        newUser.password_user = createUserDto.password;
        newUser.type_user = createUserDto.typeUser;
        await newUser.save();
        return newUser;
    }
    async loginUser(loginDto) {
        const foundUser = await this.findUser({ name_user: loginDto.username });
        if (!foundUser) {
            throw new common_1.BadRequestException('Wrong username !!!');
        }
        const checkPass = await this.checkPassword(loginDto.password, foundUser.password_user);
        if (!checkPass) {
            throw new common_1.BadRequestException('Wrong password !!!');
        }
        const accessToken = jwt.sign({
            id: foundUser.id_user,
        }, process.env.SECRET_KEY, { expiresIn: '30d' });
        return {
            idUser: foundUser.id_user,
            userName: foundUser.name_user,
            typeUser: foundUser.type_user,
            accessToken,
        };
    }
    async findUser(condition) {
        return await this.findOne({ where: condition });
    }
    async checkPassword(password, bcryptPass) {
        return await bcrypt.compare(password, bcryptPass);
    }
    async getAllUser() {
        const sql = `SELECT public.users.id_user, public.users.name_user, public.users.type_user FROM public.users`;
        return await this.query(sql);
    }
    async updateUser(idUser, updateUserDto) {
        const foundUser = await this.findUser({ id_user: idUser });
        if (!foundUser) {
            throw new common_1.BadRequestException(`Can not find user id ${idUser}`);
        }
        foundUser.password_user = await bcrypt.hash(updateUserDto.password_user, 10);
        await foundUser.save();
        return foundUser;
    }
    async deleteUser(idUser) {
        const foundUser = await this.findOne({ where: { id_user: idUser } });
        try {
            foundUser.remove();
        }
        catch (_a) {
            throw new common_1.BadRequestException(`Can not delete userid ${idUser}`);
        }
        return foundUser;
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(user_entity_1.UserEntity)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map