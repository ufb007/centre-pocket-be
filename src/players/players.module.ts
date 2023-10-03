import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerSchema } from 'src/schemas/Player.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlayerSchema])
  ],
  controllers: [PlayersController],
  providers: [PlayersService],
  exports: [TypeOrmModule]
})
export class PlayersModule {}
