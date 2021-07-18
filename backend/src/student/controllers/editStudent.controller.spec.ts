import { Test, TestingModule } from '@nestjs/testing';
import { EditStudentDto } from '../dtos/editStudentDTO';
import { EditStudentService } from '../services';
import { EditStudentController } from './editStudent.controller';

describe('EditStudentController', () => {
  let controller: EditStudentController;
  let service: EditStudentService;

  class EditStudentServiceMock {
    async execute(data: EditStudentDto): Promise<void> {
      return new Promise((resolve) => resolve(Object.assign(data)));
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditStudentController],
      providers: [EditStudentService],
    })
      .overrideProvider(EditStudentService)
      .useClass(EditStudentServiceMock)
      .compile();

    controller = module.get<EditStudentController>(EditStudentController);
    service = module.get<EditStudentService>(EditStudentService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
