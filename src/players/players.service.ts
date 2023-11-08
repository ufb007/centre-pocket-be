import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './players.entities'; 
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreatePlayerDto, PlayerResponseDto, UpdatePlayerDto } from 'src/players/players.dto';

@Injectable()
export class PlayersService {
    constructor(
        @InjectRepository(Player)
        private playersRepository: Repository<Player>
    ){}

    async getAllPlayers(): Promise<PlayerResponseDto[]> {
        return await this.playersRepository.find({
            relations: ['profile']
        });
    }

    getPlayerByUUID(uuid: string): Promise<PlayerResponseDto | null> {
        return this.playersRepository.findOne({ where: {uuid}, relations: ['profile'] });
    }

    async createPlayer(body: CreatePlayerDto): Promise<Player> {
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

    async updatePlayer(uuid: string, body: UpdatePlayerDto) {
        const player = await this.getPlayerByUUID(uuid);

        if (!player) return;

        return await this.playersRepository.save({...player, ...body}).catch(
            error => {
                return error.code
            }
        )
    }

    deletePlayer(uuid: string) {
        return this.playersRepository.delete({uuid});
    }
}
