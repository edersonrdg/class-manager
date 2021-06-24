import { Controller, Delete, Param } from '@nestjs/common';

@Controller('student')
export class DeleteStudentController {
  @Delete(':id')
  async handle(@Param('id') id: string): Promise<void> {
    return;
  }
}
