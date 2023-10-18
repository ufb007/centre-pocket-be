import { Test, TestingModule } from '@nestjs/testing';
import { ContentCreationService } from './content.creation.service';

describe('ContentCreationService', () => {
  let service: ContentCreationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentCreationService],
    }).compile();

    service = module.get<ContentCreationService>(ContentCreationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
