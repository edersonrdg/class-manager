import { Test, TestingModule } from '@nestjs/testing';
import { CreateStudentController } from './createStudent.controller';

describe('CreateStudentController', () => {
  let controller: CreateStudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateStudentController],
    }).compile();

    controller = module.get<CreateStudentController>(CreateStudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
