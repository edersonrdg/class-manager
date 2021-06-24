import { Controller, Get } from '@nestjs/common';
import { GetAllStudentsService } from '../services';
import { Student } from '../student.schema';

@Controller('student')
export class GetAllStudentsController {
  constructor(private readonly getAllStudentsService: GetAllStudentsService) {}
  @Get('/')
  async handle(): Promise<Student[]> {
    const response = await this.getAllStudentsService.execute();
    return response;
  }
}
