import { Injectable } from "@nestjs/common";
import { Exclude, Expose } from "class-transformer";
import { IsDate, IsEnum, IsNumber, IsString } from "class-validator";

type tournamentPlayerType = {
    id: number,
    playing: 'pending' | 'yes' | 'no',
    updated_at: Date
}

export class TournamentPlayerResponseDto {
    tournament_players: tournamentPlayerType
}

export class CreateTournamentDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsEnum(['9ball', '8ball', '10ball', 'straight'])
    game_type: string;

    @IsEnum(['single', 'double', 'round_robin'])
    type: string;

    @IsEnum([8, 16, 32, 64, 128])
    max_players: number;

    @IsNumber()
    race_to: number;

    @IsString()
    cover_image: string;

    @IsDate()
    start_date: Date;

    @IsEnum(['upcoming', 'active', 'finished'])
    status: string;
}

@Injectable()
export class TournamentResponseDto extends TournamentPlayerResponseDto {
    @Expose({name: "createdAt"})
    created_at: Date;

    @Exclude()
    updated_at: Date;

    @Exclude()
    tournament_players: tournamentPlayerType

    constructor(partial: Partial<TournamentResponseDto>) {
        super()
        Object.assign(this, partial);
    }
}