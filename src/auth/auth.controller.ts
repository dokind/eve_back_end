import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { ApiTags, ApiHeader } from '@nestjs/swagger';
import { UsersService } from '../users/users.service';
import { UserDto } from 'dtos/user_dto';
import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService, private readonly userService: UsersService) { }
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Body() user: UserDto) {
        const res = await this.authService.login(user);
        if (res != null) {
            return res;
        } else {
            throw new Error('Invalid credentials');
        }
    }

    @Post('/register')
    async register(@Body() user: UserDto) {
        {
            if (user.nickname == null || user.password == null || user.nickname == null) {
                throw new Error('Invalid credentials');
            } else {
                const hash = await bcrypt.hash(user.password, saltOrRounds);
                user.password = hash;
                return this.userService.create(user);
            }
        }
    }
}
