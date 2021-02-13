import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){}

    createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.userRepository.createUser(createUserDto);
    }

    login(loginDto: LoginDto): Promise<object> {
        return this.userRepository.loginUser(loginDto);
    }

    getAllUser(): Promise<UserEntity> {
        return this.userRepository.getAllUser();
    }

    updateUser(idUser: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
        return this.userRepository.updateUser(idUser, updateUserDto);
    }

    deleteUser(idUser: string): Promise<UserEntity> {
        return this.userRepository.deleteUser(idUser);
    }
}
