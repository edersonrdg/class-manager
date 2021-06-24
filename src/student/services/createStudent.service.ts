import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from '../dtos/createStudentDTO';
import { Student, StudentDocument } from '../student.schema';

@Injectable()
export class CreateStudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}
  async execute(data: CreateStudentDto): Promise<void> {
    const student = new this.studentModel(data);
    await student.save();
  }
}
