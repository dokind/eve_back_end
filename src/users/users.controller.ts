import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';
import { ApiTags, ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';


ApiBearerAuth('Authorization')
@UseGuards(LocalAuthGuard)
@ApiTags('users')
@ApiHeader({ name: 'access-token' })
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() { user }) {
        // return this.usersService.getProfile();
    }
}
