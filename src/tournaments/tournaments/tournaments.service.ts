import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TournamentResponseDto } from 'src/dtos/tournament.dto';
import { Tournament } from 'src/entities/Tournament';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TournamentsService {
    constructor(
        @InjectRepository(Tournament)
        private tournamentRepository: Repository<Tournament>
    ) {}

    async getAllTournaments(): Promise<TournamentResponseDto[]> {
        const tournaments = await this.tournamentRepository.find({
            relations: ['tournament_players']
        });

        return tournaments.map((tournament) => new TournamentResponseDto(tournament));
    }

    async getTournamentByUUID(uuid: string): Promise<TournamentResponseDto | null> {
        return this.tournamentRepository.findOne({ where: { uuid }, relations: ['tournament_players']});
    }

    async createTournament(body) {
        const tournament = this.tournamentRepository.create({
            uuid: uuid(),
            ...body
        });

        return await this.tournamentRepository.save(tournament).catch(
            error => {
                console.log(error)
                return error.code
            }
        )
    }
}
