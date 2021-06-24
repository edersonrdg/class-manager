import { Controller, Get } from '@nestjs/common';
import { Class } from '../class.interface';
import { GetAllClassService } from '../services';

@Controller('class')
export class GetAllClassController {
  constructor(private readonly getClassService: GetAllClassService) {}

  @Get('/')
  async handle(): Promise<Class[]> {
    const response = await this.getClassService.execute();
    return response;
  }
}
