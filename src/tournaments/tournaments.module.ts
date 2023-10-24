import { Module } from '@nestjs/common';
import { TournamentsController } from './tournaments.controller';
import { TournamentsService } from './tournaments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from 'src/entities/Tournament';
import { TournamentPlayer } from 'src/entities/TournamentPlayer';
import { Fixtures } from './fixtures/fixtures';
import { Fixture } from 'src/entities/Fixture';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tournament, TournamentPlayer, Fixture])
  ],
  controllers: [TournamentsController],
  providers: [TournamentsService, Fixtures],
  exports: [TypeOrmModule]
})
export class TournamentsModule {}
