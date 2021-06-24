import { Test, TestingModule } from '@nestjs/testing';
import { GetAllClassController } from './getAllClasses.controller';

describe('GetAllClassController', () => {
  let controller: GetAllClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAllClassController],
    }).compile();

    controller = module.get<GetAllClassController>(GetAllClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
