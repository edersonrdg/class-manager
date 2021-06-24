import { Test, TestingModule } from '@nestjs/testing';
import { CreateClassController } from './createClass.controller';

describe('ClassController', () => {
  let controller: CreateClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateClassController],
    }).compile();

    controller = module.get<CreateClassController>(CreateClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
