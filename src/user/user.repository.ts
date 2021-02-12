import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import * as jwt from 'jsonwebtoken';
import { UpdateUserDto } from './dto/update-user.dto';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const checkExistUser = await this.findOne({
      where: { name_user: createUserDto.nameUser },
    });

    if (checkExistUser) {
      throw new BadRequestException('Username have already exist !!!');
    }
    const newUser = new UserEntity();
    newUser.id_user = uuid();
    newUser.name_user = createUserDto.nameUser;
    newUser.password_user = createUserDto.password;
    newUser.type_user = createUserDto.typeUser;

    await newUser.save();
    return newUser;
  }

  async loginUser(loginDto: LoginDto): Promise<object> {
    const foundUser = await this.findUser({ name_user: loginDto.username });

    if (!foundUser) {
      throw new BadRequestException('Wrong username !!!');
    }

    const checkPass = await this.checkPassword(
      loginDto.password,
      foundUser.password_user,
    );
    console.log(foundUser, loginDto.password);

    if (!checkPass) {
      throw new BadRequestException('Wrong password !!!');
    }

    const accessToken: string = jwt.sign(
      {
        id: foundUser.id_user,
      },
      process.env.SECRET_KEY,
      { expiresIn: '7d' },
    );

    return {
      idUser: foundUser.id_user,
      userName: foundUser.name_user,
      typeUser: foundUser.type_user,
      accessToken,
    };
  }

  private async findUser(condition: object): Promise<UserEntity> {
    return await this.findOne({ where: condition });
  }

  private async checkPassword(
    password: string,
    bcryptPass: string,
  ): Promise<Boolean> {
    return await bcrypt.compare(password, bcryptPass);
  }

  async getAllUser(): Promise<UserEntity> {
    const sql = `SELECT public.users.id_user, public.users.name_user, public.users.type_user FROM public.users`;
    return await this.query(sql);
  }

  async updateUser(
    idUser: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    const foundUser = await this.findUser({ id_user: idUser });
    if (!foundUser) {
      throw new BadRequestException(`Can not find user id ${idUser}`);
    }

    foundUser.password_user = await bcrypt.hash(
      updateUserDto.password_user,
      10,
    );
    await foundUser.save();
    return foundUser;
  }
}
