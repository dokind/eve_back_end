import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
    @ApiProperty(
        { nullable: true, }
    )
    id: number;
    @ApiProperty(
        { nullable: true }
    )
    username: string;
    @ApiProperty(
        { nullable: true }
    )
    phone: number;
    @ApiProperty(
        { nullable: true }
    )
    password: string;
}