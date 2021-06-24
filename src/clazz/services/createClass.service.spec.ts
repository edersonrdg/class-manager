import { Test, TestingModule } from '@nestjs/testing';
import { CreateClassService } from './createClass.service';

describe('ClassService', () => {
  let service: CreateClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateClassService],
    }).compile();

    service = module.get<CreateClassService>(CreateClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
