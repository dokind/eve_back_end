import { Controller, Post, UseGuards, Body, Request } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { ApiTags, ApiHeader } from '@nestjs/swagger';
import { UsersService } from '../users/users.service';
import { UserDto } from 'dtos/user_dto';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from '@nestjs/passport';

const saltOrRounds = 10;


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService, private readonly userService: UsersService) { }
    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() { user }, @Body() { }: UserDto) {
        const token = await this.authService.login(user);

        return {
            ...user,
            token
        }

    }

    @Post('/register')
    async register(@Body() user: UserDto) {
        {
            if (user.username == null || user.password == null || user.username == null) {
                throw new Error('Invalid credentials');
            } else {
                const hash = await bcrypt.hash(user.password, saltOrRounds);
                user.password = hash;
                return this.userService.create(user);
            }
        }
    }
}
