import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from '../student.schema';

@Injectable()
export class DeleteStudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async execute(id: string): Promise<void> {
    await this.studentModel
      .findOneAndRemove()
      .where({ _id: id })
      .catch(() => {
        throw new BadRequestException({ message: 'Invalid Student id' });
      });
  }
}
