import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Class } from '../class.interface';
import { ClassDocument, Clazz } from '../class.schema';
import { CreateClassDTO } from '../dtos/createClassDTO';

@Injectable()
export class CreateClassService {
  constructor(
    @InjectModel(Clazz.name) private classModel: Model<ClassDocument>,
  ) {}
  async execute(data: CreateClassDTO): Promise<Class> {
    const classNameExists = await this.classModel.findOne().where({
      name: data.name,
    });

    if (classNameExists)
      throw new BadRequestException({ message: 'Class name already used' });

    const response = new this.classModel(data);
    return await response.save();
  }
}
