import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClassDocument = Clazz & Document;

@Schema()
export class Clazz {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  year: number;
}

export const ClassSchema = SchemaFactory.createForClass(Clazz);
