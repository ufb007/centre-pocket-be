import { Controller, Get } from '@nestjs/common';

@Controller('tournaments')
export class TournamentsController {
    @Get()
    indexController() {
        return "This is the tournaments page";
    }
}
