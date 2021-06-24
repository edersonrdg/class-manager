import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Class } from '../class.interface';
import { ClassDocument, Clazz } from '../class.schema';

@Injectable()
export class GetAllClassService {
  constructor(
    @InjectModel(Clazz.name) private classModel: Model<ClassDocument>,
  ) {}
  async execute(): Promise<Class[]> {
    const response = await this.classModel.find();
    return response;
  }
}
