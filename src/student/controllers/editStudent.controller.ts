import { Controller, Param, Put } from '@nestjs/common';
import { EditStudentService } from '../services';

@Controller('student')
export class EditStudentController {
  constructor(private readonly editStudentService: EditStudentService) {}
  @Put(':id')
  async handle(@Param('id') id: string): Promise<void> {
    await this.editStudentService.execute(id);
  }
}
