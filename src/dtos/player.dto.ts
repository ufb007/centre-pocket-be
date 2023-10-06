import { Exclude, Expose } from "class-transformer";
import { IsString, IsEmail, IsOptional } from "class-validator";

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
    @IsString()
    alias: string;

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
    @Exclude()
    password: string;

    @Expose({name: "createdAt"})
    created_at: Date;

    @Exclude()
    updated_at: Date;

    constructor(partial: Partial<PlayerResponseDto>) {
        Object.assign(this, partial);
    }
}