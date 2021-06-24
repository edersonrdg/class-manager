import { Body, Controller, Post } from '@nestjs/common';

@Controller('student')
export class CreateStudentController {
  @Post('/')
  async handle(@Body() studentData: any): Promise<void> {
    return;
  }
}
