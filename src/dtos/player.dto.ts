import { Exclude } from "class-transformer";
import { IsString, IsEmail, IsOptional } from "class-validator";
import { IPlayer } from "src/players/players.interface";

export class CreatePlayerDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEmail()
    email: string;

    @IsString()
    phone: string;

    @IsString()
    nationality: string;
}

export class UpdatePlayerDto {
    @IsOptional()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    lastName: string;

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    phone: string;

    @IsOptional()
    @IsString()
    nationality: string;
}

export class PlayerResponseDto {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    nationality: string;

    constructor(partial: Partial<PlayerResponseDto>) {
        Object.assign(this, partial);
    }
}