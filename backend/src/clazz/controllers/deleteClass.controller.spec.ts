import { Test, TestingModule } from '@nestjs/testing';
import { DeleteClassService } from '../services';
import { DeleteClassController } from './deleteClass.controller';

describe('DeleteClassController', () => {
  let controller: DeleteClassController;
  let service: DeleteClassService;

  class DeleteClassServiceMock {
    async execute(id: string): Promise<void> {
      return new Promise((resolve) => resolve());
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteClassController],
      providers: [DeleteClassService],
    })
      .overrideProvider(DeleteClassService)
      .useClass(DeleteClassServiceMock)
      .compile();

    controller = module.get<DeleteClassController>(DeleteClassController);
    service = module.get<DeleteClassService>(DeleteClassService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should calls service with valid data', async () => {
    const spyService = jest.spyOn(service, 'execute');

    await controller.handle('123');
    expect(spyService).toHaveBeenLastCalledWith('123');
  });
});
