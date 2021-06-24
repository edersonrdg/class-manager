import { Test, TestingModule } from '@nestjs/testing';
import { EditClassService } from './editClass.service';

describe('EditClassService', () => {
  let service: EditClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditClassService],
    }).compile();

    service = module.get<EditClassService>(EditClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
