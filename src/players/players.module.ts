import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './players.entities'; 
import { Profile } from 'src/entities/Profile';
import { PlayersResolver } from './players.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player, Profile]),
  ],
  providers: [PlayersService, PlayersResolver],
  exports: [TypeOrmModule]
})
export class PlayersModule {}
