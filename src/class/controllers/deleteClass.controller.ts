import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteClassService } from '../services';

@Controller('class')
export class DeleteClassController {
  constructor(private readonly deleteClassService: DeleteClassService) {}

  @Delete(':id')
  async handle(@Param('id') id: string): Promise<void> {
    await this.deleteClassService.execute(id);
  }
}
