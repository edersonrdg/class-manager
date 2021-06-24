import { Body, Controller, Post } from '@nestjs/common';
import { CreateStudentService } from '../services';

@Controller('student')
export class CreateStudentController {
  constructor(private readonly createStudentService: CreateStudentService) {}
  @Post('/')
  async handle(@Body() studentData: any): Promise<void> {
    await this.createStudentService.execute(studentData);
  }
}
