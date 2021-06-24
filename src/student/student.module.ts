import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CreateStudentController,
  GetAllStudentsController,
  DeleteStudentController,
  EditStudentController,
} from './controllers';
import {
  CreateStudentService,
  GetAllStudentsService,
  DeleteStudentService,
  EditStudentService,
} from './services';
import { Student, StudentSchema } from './student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  controllers: [
    CreateStudentController,
    GetAllStudentsController,
    DeleteStudentController,
    EditStudentController,
  ],
  providers: [
    CreateStudentService,
    GetAllStudentsService,
    DeleteStudentService,
    EditStudentService,
  ],
})
export class StudentModule {}
