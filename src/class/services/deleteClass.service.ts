import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClassDocument, Clazz } from '../class.schema';

@Injectable()
export class DeleteClassService {
  constructor(
    @InjectModel(Clazz.name) private classModel: Model<ClassDocument>,
  ) {}

  async execute(id: string): Promise<void> {
    await this.classModel
      .findOneAndDelete()
      .where({ _id: id })
      .catch(() => {
        throw new BadRequestException({ message: 'Invalid class id' });
      });
  }
}
