import { Controller, Get } from '@nestjs/common';
import { ContentCreationService } from './content.creation.service';

@Controller('content/creation')
export class ContentCreationController {
    constructor(private contentCreationService: ContentCreationService) {}

    @Get()
    async getFirstInitialAIWorking() {
        this.contentCreationService.getContent()
    }
}
