import { Controller, Param, Put } from '@nestjs/common';

@Controller('student')
export class EditStudentController {
  @Put(':id')
  async handle(@Param('id') id: string): Promise<void> {
    return;
  }
}
