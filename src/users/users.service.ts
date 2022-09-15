import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserDto } from 'dtos/user_dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'schemas/user.schema';


// This should be a real class/interface representing a user entity


@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }
    async create(user: UserDto): Promise<User | undefined> {
        try {
            const newUser = new this.userModel(user);
            await newUser.save();
            return newUser;
        } catch (error) {
            return undefined;
        }
    }

    async findOne(nickname: string) {
        const user = await this.userModel.findOne({ nickname: nickname });
        if (!user) throw new HttpException('User not found', 404);
        return user;
    }

}