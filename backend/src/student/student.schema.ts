import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Clazz } from '../clazz/class.schema';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  number: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Clazz', required: true })
  classId: Clazz;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
