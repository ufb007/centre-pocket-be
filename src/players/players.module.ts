import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './players.entities'; 
import { Profile } from 'src/entities/Profile';
import { PlayersResolver } from './players.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player, Profile]),
  ],
  controllers: [PlayersController],
  providers: [PlayersService, PlayersResolver],
  exports: [TypeOrmModule]
})
export class PlayersModule {}
