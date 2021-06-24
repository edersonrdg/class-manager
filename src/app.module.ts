import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassModule } from './class/class.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestmongo'),
    ClassModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
