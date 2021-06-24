import { Body, Controller, Put } from '@nestjs/common';

@Controller('class')
export class EditClassController {
  @Put(':id')
  async handle(@Body() userData: any): Promise<void> {
    return;
  }
}
