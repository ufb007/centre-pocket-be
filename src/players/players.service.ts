import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from 'src/entities/Player';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { IPlayer } from './players.interface';
import { PlayerResponseDto } from 'src/dtos/player.dto';

@Injectable()
export class PlayersService {
    constructor(
        @InjectRepository(Player)
        private playersRepository: Repository<Player>
    ){}

    async getAllPlayers(): Promise<Player[]> {
        return await this.playersRepository.find({
            relations: ['profile']
        });
    }

    getPlayerByUUID(uuid: string): Promise<Player | null> {
        return this.playersRepository.findOne({ where: {uuid}, relations: ['profile'] });
    }

    async createPlayer(body: IPlayer) {
        const player = this.playersRepository.create({
            uuid: uuid(),
            ...body
        });

        return await this.playersRepository.save(player).catch(
            error => {
                console.log(error)
                return error.code
            }
        )
    }

    async updatePlayer(uuid: string, body: IPlayer): Promise<PlayerResponseDto | null> {
        const player = await this.getPlayerByUUID(uuid);

        if (!player) return;

        const updatedPlayer = {...player, ...body}

        await this.playersRepository.save(updatedPlayer).catch(
            error => {
                console.log(error)
                return error.code
            }
        )

        return new PlayerResponseDto(updatedPlayer)
    }

    deletePlayer(uuid: string) {
        return this.playersRepository.delete({uuid});
    }
}
