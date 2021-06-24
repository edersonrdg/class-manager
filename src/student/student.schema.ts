import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Clazz } from 'src/clazz/class.schema';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  yenumberar: string;

  @Prop({ required: true })
  number: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Clazz', required: true })
  classId: Clazz;
}

export const ClassSchema = SchemaFactory.createForClass(Student);
