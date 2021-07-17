import { Test, TestingModule } from '@nestjs/testing';
import { Class } from '../class.interface';
import { CreateClassDTO } from '../dtos/createClassDTO';
import { CreateClassService } from '../services';
import { CreateClassController } from './createClass.controller';

describe('CreateClassController', () => {
  let controller: CreateClassController;
  let service: CreateClassService;

  class createClassServiceMock {
    async execute(data: CreateClassDTO): Promise<Class> {
      return new Promise((resolve) =>
        resolve(Object.assign(data, { id: '123' })),
      );
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateClassController],
      providers: [CreateClassService],
    })
      .overrideProvider(CreateClassService)
      .useClass(createClassServiceMock)
      .compile();

    controller = module.get<CreateClassController>(CreateClassController);
    service = module.get<CreateClassService>(CreateClassService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return 200 if valid response is provided', async () => {
    const request = { name: 'B', year: '22' };

    const response = await controller.handle(request);
    expect(response).toEqual(Object.assign(request, { id: '123' }));
  });
  it('should calls service with valid data', async () => {
    const serviceSpy = jest.spyOn(service, 'execute');
    const request = { name: 'B', year: '22' };

    await controller.handle(request);

    expect(serviceSpy).toHaveBeenCalledWith(request);
  });
});
