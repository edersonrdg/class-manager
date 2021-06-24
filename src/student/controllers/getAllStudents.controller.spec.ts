import { Test, TestingModule } from '@nestjs/testing';
import { GetAllStudentsController } from './getAllStudents.controller';

describe('GetAllStudentsController', () => {
  let controller: GetAllStudentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAllStudentsController],
    }).compile();

    controller = module.get<GetAllStudentsController>(GetAllStudentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
