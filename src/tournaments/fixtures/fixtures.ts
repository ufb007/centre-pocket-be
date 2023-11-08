import { Injectable } from '@nestjs/common';
import { TournamentsService } from '../tournaments.service';
import { PlayersService } from 'src/players/players.service';

@Injectable()
export class Fixtures {
    constructor(
        private tournamentsService: TournamentsService,
        private playersService: PlayersService
    ) {}

    generateFixture(uuid: string) {
        const tournament = this.tournamentsService.getTournamentByUUID(uuid).then(tournament => {
            // single elimination process
            // for ideal bracket process, even numbers would work well. 
            // the process can start with 8, 16, 32, 64, 128 players for a tournament
            // get all players for tournament in array variable
            // 
        })
    }
}
