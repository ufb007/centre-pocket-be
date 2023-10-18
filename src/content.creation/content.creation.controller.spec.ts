import { Test, TestingModule } from '@nestjs/testing';
import { ContentCreationController } from './content.creation.controller';

describe('ContentCreationController', () => {
  let controller: ContentCreationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentCreationController],
    }).compile();

    controller = module.get<ContentCreationController>(ContentCreationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
