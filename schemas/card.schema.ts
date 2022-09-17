import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type CardDocument = Card & Document;

@Schema()
export class Card {
    @Prop({ required: true, })
    word: string;
    @Prop({ required: true })
    translation: string;
    @Prop({ required: true })
    wordType: string;
    @Prop({ required: false })
    pronunciation: string;
    @Prop({ required: false })
    example: string;
    @Prop()
    image: string;




}

export const CardSchema = SchemaFactory.createForClass(Card);
