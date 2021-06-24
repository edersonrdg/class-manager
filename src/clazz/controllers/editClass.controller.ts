import {
  Body,
  Controller,
  Param,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EditClassDTO } from '../dtos/editClassDTO';
import { EditClassService } from '../services';

@Controller('class')
export class EditClassController {
  constructor(private readonly editClassService: EditClassService) {}

  @UsePipes(new ValidationPipe())
  @Put(':id')
  async handle(
    @Body() data: EditClassDTO,
    @Param('id') id: string,
  ): Promise<void> {
    await this.editClassService.execute(data, id);
  }
}
