import { Test, TestingModule } from '@nestjs/testing';
import { Fixtures } from './fixtures';

describe('Fixtures', () => {
  let provider: Fixtures;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Fixtures],
    }).compile();

    provider = module.get<Fixtures>(Fixtures);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
