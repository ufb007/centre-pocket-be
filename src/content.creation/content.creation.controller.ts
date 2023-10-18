import { Controller, Get } from '@nestjs/common';
import { ContentCreationService } from './content.creation.service';

@Controller('content/creation')
export class ContentCreationController {
    constructor(private contentCreationService: ContentCreationService) {}

    @Get()
    getFirstInitialAIWorking() {
        const content = this.contentCreationService.getContent()

        content.then(value => {
            console.log('show value - ', value.choices[0].message)
        })
    }
}
