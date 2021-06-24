import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from '../dtos/createStudentDTO';

@Injectable()
export class CreateStudentService {
  async execute(data: CreateStudentDto): Promise<void> {
    return;
  }
}
