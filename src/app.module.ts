import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassModule } from './class/class.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestmongo'),
    ClassModule,
    StudentModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
