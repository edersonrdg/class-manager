import { Injectable } from '@nestjs/common';
import { Student } from '../student.schema';

@Injectable()
export class GetAllStudentsService {
  async execute(): Promise<Student[]> {
    return [];
  }
}
