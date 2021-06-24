import { Controller, Get } from '@nestjs/common';
import { Class } from '../class.interface';

@Controller('class')
export class GetAllClassController {
  @Get('/')
  async handle(): Promise<Class[]> {
    return [];
  }
}
