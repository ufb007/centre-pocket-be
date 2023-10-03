import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto, PlayerResponseDto, UpdatePlayerDto } from 'src/dtos/player.dto';

@Controller('players')
export class PlayersController {
    constructor(private playersService: PlayersService){}

    @Get()
    getAllPlayers() {
        return this.playersService.getAllPlayers()
    }

    @Get(':uuid')
    getPlayerByUUID(
        @Param('uuid', ParseUUIDPipe) uuid: string
    ) {
        return this.playersService.getPlayerByUUID(uuid)
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
    ) {
        const response = this.playersService.updatePlayer(uuid, body);

        return response;
    }

    @Delete(':uuid')
    deletePlayer(
        @Param('uuid', ParseUUIDPipe) uuid: string
    ) {
        return this.playersService.deletePlayer(uuid);
    }
}
