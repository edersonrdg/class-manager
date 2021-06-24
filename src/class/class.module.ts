import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassSchema, Clazz } from './class.schema';
import { CreateClassController } from './controllers';
import { CreateClassService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Clazz.name, schema: ClassSchema }]),
  ],
  controllers: [CreateClassController],
  providers: [CreateClassService],
})
export class ClassModule {}
