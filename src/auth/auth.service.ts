
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'dtos/user_dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async validateUser(nickname: string, pass: string): Promise<any> {
        console.log('validate User is called');
        const user = await this.usersService.findOne(nickname);
        const isPasswordCorrect = await bcrypt.compare(pass, user.password);
        if (user && isPasswordCorrect) {

            const { password, ...result } = user.toJSON();
            return result;
        }
        return null;
    }
    async login(user: UserDto) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload)
        };

    }
    async register(user: UserDto) {
        return this.usersService.create(user);
    }
}