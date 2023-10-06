import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from 'src/entities/Player';
import { Profile } from 'src/entities/Profile';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player, Profile]),
  ],
  controllers: [PlayersController],
  providers: [PlayersService],
  exports: [TypeOrmModule]
})
export class PlayersModule {}
