import { Test, TestingModule } from '@nestjs/testing';
import { GetAllClassService } from '../services';
import { GetAllClassController } from './getAllClasses.controller';

describe('GetAllClassController', () => {
  let controller: GetAllClassController;
  let service: GetAllClassService;

  class GetAllClassServiceMock {
    async execute(): Promise<void> {
      return new Promise((resolve) => resolve());
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAllClassController],
      providers: [GetAllClassService],
    })
      .overrideProvider(GetAllClassService)
      .useClass(GetAllClassServiceMock)
      .compile();

    controller = module.get<GetAllClassController>(GetAllClassController);
    service = module.get<GetAllClassService>(GetAllClassService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
