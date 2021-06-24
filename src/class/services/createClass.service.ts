import { Injectable } from '@nestjs/common';
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
    const response = new this.classModel(data);
    return await response.save();
  }
}
