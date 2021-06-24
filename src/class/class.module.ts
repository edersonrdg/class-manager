import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
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
} from './services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Clazz.name, schema: ClassSchema }]),
  ],
  controllers: [
    CreateClassController,
    GetAllClassController,
    DeleteClassController,
    EditClassController,
  ],
  providers: [CreateClassService, GetAllClassService, DeleteClassService],
})
export class ClassModule {}
