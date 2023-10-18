import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';
import { CreateTournamentDto, TournamentResponseDto } from 'src/dtos/tournament.dto';

@Controller('tournaments')
export class TournamentsController {
    constructor(
        private tournamentsService: TournamentsService
    ) {}

    @Get()
    getAllTournaments(): Promise<TournamentResponseDto[]> {
        return this.tournamentsService.getAllTournaments().then(tournaments => {
            return tournaments.map(tournament => new TournamentResponseDto(tournament))
        })
    }

    @Get(':status')
    getTournamentsByStatus(
        @Param('status') status: 'upcoming' | 'active' | 'finished'
    ): Promise<TournamentResponseDto[]> {
        return this.tournamentsService.getAllTournaments(status).then(tournaments => {
            return tournaments.map(tournament => new TournamentResponseDto(tournament))
        })
    }

    @Get('tournament/:uuid')
    getTournament(
        @Param('uuid', ParseUUIDPipe) uuid: string
    ): Promise<TournamentResponseDto> {
        return this.tournamentsService.getTournamentByUUID(uuid).then((tournament) => {
            return new TournamentResponseDto(tournament);
        })
    }

    @Post()
    createTournament(
        @Body() body: CreateTournamentDto
    ) {
        return this.tournamentsService.createTournament(body);
    }
}
