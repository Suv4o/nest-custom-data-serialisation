import { Controller, Post, Body } from '@nestjs/common';
import { Serialize } from '../interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';
import { SerializeUserDto } from './dto/serialize.user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Serialize(SerializeUserDto)
  @Post('signup')
  signUp(@Body() userRequest: UserDto): Promise<void> {
    return this.userService.createUser(userRequest);
  }
}
