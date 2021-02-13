import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    loginForNormalUser(loginDto: LoginDto): Promise<object>;
    createNewUser(createUserDto: CreateUserDto): Promise<UserEntity>;
    getAllUser(): Promise<UserEntity>;
    updateUser(idUser: string, updateUserDto: UpdateUserDto): Promise<UserEntity>;
    deleteUser(idUser: string): Promise<UserEntity>;
}
