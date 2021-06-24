import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EditStudentDto } from '../dtos/editStudentDTO';
import { Student, StudentDocument } from '../student.schema';

@Injectable()
export class EditStudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async execute(data: EditStudentDto, id: string): Promise<void> {
    await this.studentModel
      .findOneAndUpdate()
      .where({ _id: id })
      .update(data)
      .catch(() => {
        throw new BadRequestException({ message: 'Invalid student data' });
      });
  }
}
