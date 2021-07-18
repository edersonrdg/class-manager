import { Test, TestingModule } from '@nestjs/testing';
import { Student } from '../student.interface';
import { CreateStudentDto } from '../dtos/createStudentDTO';
import { CreateStudentService } from '../services';
import { CreateStudentController } from './createStudent.controller';

describe('CreateStudentController', () => {
  let controller: CreateStudentController;
  let service: CreateStudentService;

  class CreateStudentServiceMock {
    async execute(data: CreateStudentDto): Promise<Student> {
      return new Promise((resolve) =>
        resolve(Object.assign(data, { id: '123' })),
      );
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateStudentController],
      providers: [CreateStudentService],
    })
      .overrideProvider(CreateStudentService)
      .useClass(CreateStudentServiceMock)
      .compile();

    controller = module.get<CreateStudentController>(CreateStudentController);
    service = module.get<CreateStudentService>(CreateStudentService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
