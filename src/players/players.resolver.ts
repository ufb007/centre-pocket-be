import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Player } from './players.entities'; 
import { PlayersService } from './players.service';
import { CreatePlayerDto, PlayerResponseDto, UpdatePlayerDto } from 'src/players/players.dto';
import { GraphQLError } from 'graphql';

@Resolver(of => Player)
export class PlayersResolver {
    constructor(private playersService: PlayersService) {}

    @Query(returns => [Player])
    getAllPlayers(): Promise<PlayerResponseDto[]> {
        return this.playersService.getAllPlayers()
    }

    @Query(returns => Player)
    getPlayerByUUID(@Args('uuid', { type: () => String }) uuid: string): Promise<PlayerResponseDto> {
        return this.playersService.getPlayerByUUID(uuid);
    }

    @Mutation(returns => Player)
    createPlayer(@Args('body') body: CreatePlayerDto): Promise<Player> {
        return this.playersService.createPlayer(body);
    }

    @Mutation(returns => Player)
    async updatePlayer(
        @Args('uuid', { type: () => String }) uuid: string,
        @Args('body') body: UpdatePlayerDto
    ): Promise<PlayerResponseDto | string> {
        const updatePlayer = this.playersService.updatePlayer(uuid, body);

        await updatePlayer.then(value => {
            if (typeof value === 'string') {
                throw new GraphQLError('An error has occurred', {
                    extensions: {
                        code: value
                    }
                })
            }
        })

        return updatePlayer;
    }
}
