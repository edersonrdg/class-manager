import { Injectable } from '@nestjs/common';
import { EditStudentDto } from '../dtos/editStudentDTO';

@Injectable()
export class EditStudentService {
  async execute(classData: EditStudentDto, id: string): Promise<void> {
    return;
  }
}
