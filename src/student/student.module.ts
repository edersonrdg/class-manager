import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateStudentController } from './controllers';
import { CreateStudentService } from './services';
import { Student, StudentSchema } from './student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  controllers: [CreateStudentController],
  providers: [CreateStudentService],
})
export class StudentModule {}
