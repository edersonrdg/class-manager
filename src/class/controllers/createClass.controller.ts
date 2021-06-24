import { Body, Controller, Post } from '@nestjs/common';
import { CreateClassDTO } from '../dtos/createClassDTO';

@Controller('class')
export class CreateClassController {
  @Post('/')
  handle(@Body() userData: CreateClassDTO): boolean {
    return true;
  }
}
