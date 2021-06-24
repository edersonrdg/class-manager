import { Test, TestingModule } from '@nestjs/testing';
import { DeleteClassController } from './deleteClass.controller';

describe('DeleteClassController', () => {
  let controller: DeleteClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteClassController],
    }).compile();

    controller = module.get<DeleteClassController>(DeleteClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
