import { Test, TestingModule } from '@nestjs/testing';
import { GetAllClassService } from './get-all-class.service';

describe('GetAllClassService', () => {
  let service: GetAllClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllClassService],
    }).compile();

    service = module.get<GetAllClassService>(GetAllClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
