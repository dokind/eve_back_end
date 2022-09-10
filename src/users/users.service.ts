import { Injectable } from '@nestjs/common';
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
            return newUser.save();
        } catch (error) {
            return undefined;
        }
    }

    findOne(nickname: string) {
        return this.userModel.findOne({ nickname: nickname });

    }

}