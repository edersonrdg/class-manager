import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CreateStudentController,
  GetAllStudentsController,
} from './controllers';
import { CreateStudentService, GetAllStudentsService } from './services';
import { Student, StudentSchema } from './student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  controllers: [CreateStudentController, GetAllStudentsController],
  providers: [CreateStudentService, GetAllStudentsService],
})
export class StudentModule {}
