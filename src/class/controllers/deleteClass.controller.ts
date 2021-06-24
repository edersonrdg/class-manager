import { Controller, Delete, Param } from '@nestjs/common';

@Controller('class')
export class DeleteClassController {
  @Delete(':id')
  async handle(@Param('id') id: string): Promise<void> {
    return;
  }
}
