import { Body, Controller, Post } from '@nestjs/common';

@Controller('class')
export class ClassController {
  @Post('/signup')
  create(@Body() userData: any): boolean {
    return true;
  }
}
