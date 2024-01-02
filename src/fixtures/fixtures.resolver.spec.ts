import { Test, TestingModule } from '@nestjs/testing';
import { FixturesResolver } from './fixtures.resolver';

describe('FixturesResolver', () => {
  let resolver: FixturesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FixturesResolver],
    }).compile();

    resolver = module.get<FixturesResolver>(FixturesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
