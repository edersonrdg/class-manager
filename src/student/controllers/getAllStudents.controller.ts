import { Controller, Get } from '@nestjs/common';
import { Student } from '../student.schema';

@Controller('student')
export class GetAllStudentsController {
  @Get('/')
  async handle(): Promise<Student[]> {
    return [];
  }
}
