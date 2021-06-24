import { Body, Controller, Param, Put } from '@nestjs/common';
import { EditClassDTO } from '../dtos/editClassDTO';
import { EditClassService } from '../services';

@Controller('class')
export class EditClassController {
  constructor(private readonly editClassService: EditClassService) {}

  @Put(':id')
  async handle(
    @Body() classData: EditClassDTO,
    @Param('id') id: string,
  ): Promise<void> {
    await this.editClassService.execute(classData, id);
  }
}
