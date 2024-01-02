import { Resolver, Query, Args } from '@nestjs/graphql';
import { TournamentsService } from './tournaments.service';
import { Tournament } from './tournaments.entities';
import { TournamentResponseDto } from 'src/dtos/tournament.dto';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(of => Tournament)
export class TournamentsResolver {
    constructor(private tournamentsService: TournamentsService) {}

    @Query(returns => [Tournament])
    tournaments(
        @Args('status', { type: () => String }) status?: 'upcoming' | 'active' | 'finished'
    ): Promise<TournamentResponseDto[]> {
        return this.tournamentsService.getAllTournaments(status);
    }

    @Query(returns => Tournament)
    tournament(
        @Args('uuid', ParseUUIDPipe) uuid: string
    ): Promise<TournamentResponseDto> {
        return this.tournamentsService.getTournamentByUUID(uuid)
    }
}
