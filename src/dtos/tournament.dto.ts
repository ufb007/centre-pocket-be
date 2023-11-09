import { Inject, Injectable } from "@nestjs/common";
import { Field, InputType } from "@nestjs/graphql";
import { Exclude, Expose } from "class-transformer";
import { IsDate, IsEnum, IsNumber, IsString } from "class-validator";

export interface tournamentPlayerType {
    id: number;
    playing: 'pending' | 'yes' | 'no';
    paid: 0 | 1;
    tournament_id: number;
    player_id: number;
    created_at: Date;
    updated_at: Date
}

@InputType()
export class CreateTournamentDto {
    @IsString()
    @Field()
    name: string;

    @IsString()
    @Field()
    description: string;

    @IsEnum(['9ball', '8ball', '10ball', 'straight'])
    @Field()
    game_type: string;

    @IsEnum(['single', 'double', 'round_robin'])
    @Field()
    type: string;

    @IsEnum([8, 16, 32, 64, 128])
    @Field()
    max_players: number;

    @IsNumber()
    @Field()
    race_to: number;

    @IsString()
    @Field()
    cover_image: string;

    @IsDate()
    @Field()
    start_date: Date;

    @IsEnum(['upcoming', 'active', 'finished'])
    @Field()
    status: string;
}

export class TournamentResponseDto {
    @Expose()
    id: number;

    @Expose()
    uuid: string;

    @Expose({name: "createdAt"})
    created_at: Date;

    @Exclude()
    updated_at: Date;

    constructor(partial: Partial<TournamentResponseDto>) {
        Object.assign(this, partial);
    }
}