import { Test, TestingModule } from '@nestjs/testing';
import { CreateStudentService } from './createStudent.service';

describe('CreateStudentService', () => {
  let service: CreateStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateStudentService],
    }).compile();

    service = module.get<CreateStudentService>(CreateStudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
