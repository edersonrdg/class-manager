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
  it('should return sucess if valid request is provided', async () => {
    const request = {
      firstName: 'name',
      lastName: 'lastname',
      email: 'email@email.com',
      number: '123',
      classId: '123',
    };

    const response = await controller.handle(request);
    expect(response).toBeUndefined();
  });
  it('should calls service with valid data', async () => {
    const serviceSpy = jest.spyOn(service, 'execute');
    const request = {
      firstName: 'name',
      lastName: 'lastname',
      email: 'email@email.com',
      number: '123',
      classId: '123',
    };

    await controller.handle(request);

    expect(serviceSpy).toHaveBeenCalledWith(request);
  });
});
