import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from '../student.schema';

@Injectable()
export class GetAllStudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async execute(): Promise<Student[]> {
    const response = await this.studentModel.find();
    return response;
  }
}
