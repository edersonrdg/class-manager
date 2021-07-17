import { Test, TestingModule } from '@nestjs/testing';
import { EditClassService } from '../services';
import { EditClassController } from './editClass.controller';

describe('EditClassController', () => {
  let controller: EditClassController;
  let service: EditClassService;

  class EditClassServiceMock {
    async execute(): Promise<void> {
      return new Promise((resolve) => resolve());
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditClassController],
      providers: [EditClassService],
    })
      .overrideProvider(EditClassService)
      .useClass(EditClassServiceMock)
      .compile();

    controller = module.get<EditClassController>(EditClassController);
    service = module.get<EditClassService>(EditClassService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
