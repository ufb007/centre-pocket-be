import { Injectable } from '@nestjs/common';
import { TournamentsService } from '../tournaments.service';

@Injectable()
export class Fixtures {
    constructor(
        private tournamentsService: TournamentsService
    ) {

    }
}
