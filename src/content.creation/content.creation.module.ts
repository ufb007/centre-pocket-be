import { Module } from '@nestjs/common';
import { ContentCreationController } from './content.creation.controller';
import { ContentCreationService } from './content.creation.service';

@Module({
  controllers: [ContentCreationController],
  providers: [ContentCreationService]
})
export class ContentCreationModule {}
