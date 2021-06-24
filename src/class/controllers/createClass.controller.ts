import { Body, Controller, Post } from '@nestjs/common';
import { Class } from '../class.interface';
import { CreateClassDTO } from '../dtos/createClassDTO';
import { CreateClassService } from '../services';

@Controller('class')
export class CreateClassController {
  constructor(private readonly createClassService: CreateClassService) {}

  @Post('/')
  async handle(@Body() userData: CreateClassDTO): Promise<Class> {
    const response = await this.createClassService.execute(userData);
    return response;
  }
}
