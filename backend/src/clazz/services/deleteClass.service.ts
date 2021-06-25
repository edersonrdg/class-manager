import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from 'src/student/student.schema';
import { ClassDocument, Clazz } from '../class.schema';

@Injectable()
export class DeleteClassService {
  constructor(
    @InjectModel(Clazz.name) private classModel: Model<ClassDocument>,
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async execute(id: string): Promise<void> {
    await this.classModel
      .findOneAndDelete()
      .where({ _id: id })
      .catch(() => {
        throw new BadRequestException({ message: 'Invalid class id' });
      });

    await this.studentModel
      .find()
      .where({
        classId: id,
      })
      .deleteMany()
      .catch(() => {
        throw new BadRequestException({ message: 'no student find' });
      });
  }
}
