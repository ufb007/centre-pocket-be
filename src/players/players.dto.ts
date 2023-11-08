import { Field, InputType } from "@nestjs/graphql";
import { Exclude, Expose } from "class-transformer";
import { IsString, IsEmail, IsOptional } from "class-validator";

@InputType()
export class CreatePlayerDto {
    @IsString()
    @Field()
    firstName: string;

    @IsString()
    @Field()
    lastName: string;

    @IsEmail()
    @Field()
    email: string;

    @IsString()
    @Field()
    phone: string;

    @IsString()
    @Field()
    nationality: string;
}

@InputType()
export class UpdatePlayerDto {
    @IsOptional()
    @IsString()
    @Field({ nullable: true })
    firstName: string;

    @IsOptional()
    @IsString()
    @Field({ nullable: true })
    lastName: string;

    @IsOptional()
    @IsString()
    @Field({ nullable: true })
    alias: string;

    @IsOptional()
    @IsEmail()
    @Field({ nullable: true })
    email: string;

    @IsOptional()
    @IsString()
    @Field({ nullable: true })
    phone: string;

    @IsOptional()
    @IsString()
    @Field({ nullable: true })
    nationality: string;
}

export class PlayerResponseDto {
    @Exclude()
    password: string;

    @Expose()
    createdAt: Date;

    @Exclude()
    updatedAt: Date;

    constructor(partial: Partial<PlayerResponseDto>) {
        Object.assign(this, partial);
    }
}