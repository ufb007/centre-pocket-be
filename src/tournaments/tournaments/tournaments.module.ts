import { Module } from '@nestjs/common';
import { TournamentsController } from './tournaments.controller';
import { TournamentsService } from './tournaments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournaments } from 'src/entities/Tournaments';
import { TournamentPlayer } from 'src/entities/TournamentPlayer';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tournaments, TournamentPlayer])
  ],
  controllers: [TournamentsController],
  providers: [TournamentsService],
  exports: [TypeOrmModule]
})
export class TournamentsModule {}
