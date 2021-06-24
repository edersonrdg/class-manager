import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClassDocument = Clazz & Document;

@Schema()
export class Clazz {
  @Prop()
  name: string;

  @Prop()
  year: number;
}

export const ClassSchema = SchemaFactory.createForClass(Clazz);
