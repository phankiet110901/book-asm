import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { AuthGuard } from 'src/share/auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('login')
  loginForNormalUser(@Body() loginDto: LoginDto): Promise<object> {
    return this.userService.login(loginDto);
  }

  @Post('create-user')
  @UsePipes(ValidationPipe)
  createNewUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get('get-all-user')
  getAllUser(): Promise<UserEntity> {
    return this.userService.getAllUser();
  }

  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  @Patch('update-user/:idUser')
  updateUser(@Param('idUser') idUser: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(idUser, updateUserDto);
  }
}
