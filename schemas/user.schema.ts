import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop(
        {}
    )
    nickname: string;

    @Prop()
    phone: number;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);