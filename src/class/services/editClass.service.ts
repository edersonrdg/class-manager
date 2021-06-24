import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClassDocument, Clazz } from '../class.schema';
import { EditClassDTO } from '../dtos/editClassDTO';

@Injectable()
export class EditClassService {
  constructor(
    @InjectModel(Clazz.name) private classModel: Model<ClassDocument>,
  ) {}
  async execute(data: EditClassDTO, id: string): Promise<void> {
    await this.classModel
      .findOneAndUpdate()
      .where({ _id: id })
      .update(data)
      .catch(() => {
        throw new BadRequestException({ message: 'Invalid class data' });
      });
  }
}
