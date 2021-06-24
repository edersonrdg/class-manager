import { Module } from '@nestjs/common';
import { CreateStudentController } from './controllers';
import { CreateStudentService } from './services';

@Module({
  controllers: [CreateStudentController],
  providers: [CreateStudentService],
})
export class StudentModule {}
