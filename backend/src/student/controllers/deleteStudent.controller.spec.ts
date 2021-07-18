import { Test, TestingModule } from '@nestjs/testing';
import { DeleteStudentService } from '../services';
import { DeleteStudentController } from './deleteStudent.controller';

describe('DeleteStudentController', () => {
  let controller: DeleteStudentController;
  let service: DeleteStudentService;

  class DeleteStudentServiceMock {
    async execute(id: string): Promise<void> {
      return new Promise((resolve) => resolve());
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteStudentController],
      providers: [DeleteStudentService],
    })
      .overrideProvider(DeleteStudentService)
      .useClass(DeleteStudentServiceMock)
      .compile();

    controller = module.get<DeleteStudentController>(DeleteStudentController);
    service = module.get<DeleteStudentService>(DeleteStudentService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
