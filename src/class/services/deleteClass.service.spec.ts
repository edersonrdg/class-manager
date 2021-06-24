import { Test, TestingModule } from '@nestjs/testing';
import { DeleteClassService } from './deleteClass.service';

describe('DeleteClassService', () => {
  let service: DeleteClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteClassService],
    }).compile();

    service = module.get<DeleteClassService>(DeleteClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
