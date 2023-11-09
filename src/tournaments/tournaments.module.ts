import { Module } from '@nestjs/common';
import { TournamentsController } from './tournaments.controller';
import { TournamentsService } from './tournaments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from './tournaments.entities';
import { TournamentPlayer } from 'src/entities/TournamentPlayer';
import { Fixture } from 'src/entities/Fixture';
import { TournamentsResolver } from './tournaments.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tournament, TournamentPlayer, Fixture])
  ],
  controllers: [TournamentsController],
  providers: [TournamentsService, TournamentsResolver],
  exports: [TypeOrmModule]
})
export class TournamentsModule {}
