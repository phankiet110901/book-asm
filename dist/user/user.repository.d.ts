import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './user.entity';
import { LoginDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserRepository extends Repository<UserEntity> {
    createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
    loginUser(loginDto: LoginDto): Promise<object>;
    private findUser;
    private checkPassword;
    getAllUser(): Promise<UserEntity>;
    updateUser(idUser: string, updateUserDto: UpdateUserDto): Promise<UserEntity>;
    deleteUser(idUser: string): Promise<UserEntity>;
}
