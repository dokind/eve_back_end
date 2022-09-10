import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';
import { ApiTags, ApiBearerAuth, ApiHeader } from '@nestjs/swagger';


ApiBearerAuth('Authorization')
@ApiTags('users')
@ApiHeader({ name: 'access-token' })
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile() {
        // return this.usersService.getProfile();
    }
}
