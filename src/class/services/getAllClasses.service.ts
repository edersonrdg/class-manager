import { Injectable } from '@nestjs/common';
import { Class } from '../class.interface';

@Injectable()
export class GetAllClassService {
  async execute(): Promise<Class[]> {
    return [];
  }
}
