import { Controller, Get } from '@nestjs/common';

@Controller('students')
export class GetAllStudentsController {
  @Get('/')
  async handle(): Promise<void> {
    return;
  }
}
