import { Injectable } from '@nestjs/common';
import { Class } from '../class.interface';
import { CreateClassDTO } from '../dtos/createClassDTO';

@Injectable()
export class CreateClassService {
  async execute(data: CreateClassDTO): Promise<Class> {
    return await { id: '123', name: data.name, year: data.year };
  }
}
