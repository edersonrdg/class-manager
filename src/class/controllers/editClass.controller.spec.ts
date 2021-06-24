import { Test, TestingModule } from '@nestjs/testing';
import { EditClassController } from './editClass.controller';

describe('EditClassController', () => {
  let controller: EditClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditClassController],
    }).compile();

    controller = module.get<EditClassController>(EditClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
