import { Body, Controller, Post } from '@nestjs/common';
import { ClassDTO } from './classDTO';

@Controller('class')
export class ClassController {
  @Post('/')
  create(@Body() userData: ClassDTO): boolean {
    return true;
  }
}
