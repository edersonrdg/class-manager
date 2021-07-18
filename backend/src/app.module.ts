import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassModule } from './clazz/class.module';
import { StudentModule } from './student/student.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    ClassModule,
    StudentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
