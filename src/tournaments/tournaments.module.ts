import { Module } from '@nestjs/common';
import { TournamentsController } from './tournaments.controller';
import { TournamentsService } from './tournaments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from 'src/entities/Tournament';
import { TournamentPlayer } from 'src/entities/TournamentPlayer';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tournament, TournamentPlayer])
  ],
  controllers: [TournamentsController],
  providers: [TournamentsService],
  exports: [TypeOrmModule]
})
export class TournamentsModule {}
