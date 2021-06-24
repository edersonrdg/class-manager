import { Module } from '@nestjs/common';
import { CreateStudentController } from './controllers';

@Module({
  controllers: [CreateStudentController],
})
export class StudentModule {}
