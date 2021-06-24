import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassSchema, Clazz } from './class.schema';
import {
  CreateClassController,
  GetAllClassController,
  DeleteClassController,
} from './controllers';
import { CreateClassService, GetAllClassService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Clazz.name, schema: ClassSchema }]),
  ],
  controllers: [
    CreateClassController,
    GetAllClassController,
    DeleteClassController,
  ],
  providers: [CreateClassService, GetAllClassService],
})
export class ClassModule {}
