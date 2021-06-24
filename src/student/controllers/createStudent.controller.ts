import { Body, Controller, Post } from '@nestjs/common';
import { CreateStudentDto } from '../dtos/createStudentDTO';
import { CreateStudentService } from '../services';

@Controller('student')
export class CreateStudentController {
  constructor(private readonly createStudentService: CreateStudentService) {}
  @Post('/')
  async handle(@Body() studentData: CreateStudentDto): Promise<void> {
    await this.createStudentService.execute(studentData);
  }
}
