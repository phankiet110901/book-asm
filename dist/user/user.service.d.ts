import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
    login(loginDto: LoginDto): Promise<object>;
    getAllUser(): Promise<UserEntity>;
    updateUser(idUser: string, updateUserDto: UpdateUserDto): Promise<UserEntity>;
    deleteUser(idUser: string): Promise<UserEntity>;
}
