import { Test, TestingModule } from '@nestjs/testing';
import { GetAllStudentsService } from './getAllStudents.service';

describe('GetAllStudentsService', () => {
  let service: GetAllStudentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllStudentsService],
    }).compile();

    service = module.get<GetAllStudentsService>(GetAllStudentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
