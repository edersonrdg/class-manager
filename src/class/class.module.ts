import { Module } from '@nestjs/common';
import { CreateClassController } from './controllers';
import { CreateClassService } from './services';

@Module({
  controllers: [CreateClassController],
  providers: [CreateClassService],
})
export class ClassModule {}
