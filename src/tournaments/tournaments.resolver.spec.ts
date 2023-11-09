import { Test, TestingModule } from '@nestjs/testing';
import { TournamentsResolver } from './tournaments.resolver';

describe('TournamentsResolver', () => {
  let resolver: TournamentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TournamentsResolver],
    }).compile();

    resolver = module.get<TournamentsResolver>(TournamentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
