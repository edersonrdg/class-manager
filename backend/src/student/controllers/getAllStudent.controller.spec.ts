import { Test, TestingModule } from '@nestjs/testing';
import { GetAllStudentsService } from '../services';
import { GetAllStudentsController } from './getAllStudents.controller';

describe('GetAllStudentsController', () => {
  let controller: GetAllStudentsController;
  let service: GetAllStudentsService;

  class GetAllStudentsServiceMock {
    async execute(): Promise<void> {
      return new Promise((resolve) => resolve());
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAllStudentsController],
      providers: [GetAllStudentsService],
    })
      .overrideProvider(GetAllStudentsService)
      .useClass(GetAllStudentsServiceMock)
      .compile();

    controller = module.get<GetAllStudentsController>(GetAllStudentsController);
    service = module.get<GetAllStudentsService>(GetAllStudentsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should calls service with valid data', async () => {
    const serviceSpy = jest.spyOn(service, 'execute');

    await controller.handle();

    expect(serviceSpy).toHaveBeenCalled();
  });
});
