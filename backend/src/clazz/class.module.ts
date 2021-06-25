import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from 'src/student/student.schema';
import { ClassSchema, Clazz } from './class.schema';
import {
  CreateClassController,
  GetAllClassController,
  DeleteClassController,
  EditClassController,
} from './controllers';
import {
  CreateClassService,
  GetAllClassService,
  DeleteClassService,
  EditClassService,
} from './services';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Clazz.name, schema: ClassSchema },
      { name: Student.name, schema: StudentSchema },
    ]),
  ],
  controllers: [
    CreateClassController,
    GetAllClassController,
    DeleteClassController,
    EditClassController,
  ],
  providers: [
    CreateClassService,
    GetAllClassService,
    DeleteClassService,
    EditClassService,
  ],
})
export class ClassModule {}
