import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { Class } from '../class.interface';
import { CreateClassDTO } from '../dtos/createClassDTO';
import { CreateClassService } from '../services';

@Controller('class')
export class CreateClassController {
  constructor(private readonly createClassService: CreateClassService) {}

  @UsePipes(new ValidationPipe())
  @Post('/')
  async handle(@Body() classData: CreateClassDTO): Promise<Class> {
    const response = await this.createClassService.execute(classData);
    return response;
  }
}
