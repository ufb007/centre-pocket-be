import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto, PlayerResponseDto, UpdatePlayerDto } from 'src/players/players.dto';

@Controller('players')
export class PlayersController {
    constructor(private playersService: PlayersService){}

    @Get()
    getAllPlayers(): Promise<PlayerResponseDto[]> {
        return this.playersService.getAllPlayers().then(players => {
            return players.map((player) => new PlayerResponseDto(player))
        })
    }

    @Get(':uuid')
    getPlayerByUUID(
        @Param('uuid', ParseUUIDPipe) uuid: string
    ): Promise<PlayerResponseDto> {
        return this.playersService.getPlayerByUUID(uuid).then((player) => {
            return new PlayerResponseDto(player);
        })
    }

    @Post()
    createPlayer(
        @Body() body: CreatePlayerDto
    ) {
        return this.playersService.createPlayer(body)
    }

    @Put(':uuid')
    updatePlayer(
        @Param('uuid', ParseUUIDPipe) uuid: string,
        @Body() body: UpdatePlayerDto
    ): Promise<PlayerResponseDto> {
        return this.playersService.updatePlayer(uuid, body).then(player => {
            return player = new PlayerResponseDto(player);
        });
    }

    @Delete(':uuid')
    deletePlayer(
        @Param('uuid', ParseUUIDPipe) uuid: string
    ) {
        return this.playersService.deletePlayer(uuid);
    }
}
