import { Column, CreateDateColumn, Entity, Generated, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TournamentPlayer } from "src/entities/TournamentPlayer"; 
import { Exclude } from "class-transformer";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { isEnumType } from "graphql";

export type GameType = "9ball" | "8ball" | "10ball" | "straight";

@Entity('tournaments')
@ObjectType()
export class Tournament {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    public id: number;

    @Column()
    @Generated("uuid")
    @Field()
    public uuid: string;

    @Column()
    @Field()
    public name: string;

    @Column({ type: 'text' })
    @Field()
    public description: string;

    @Column({
        type: 'enum',
        enum: ["9ball", "8ball", "10ball", "straight"],
        default: "9ball"
    })
    @Field()
    public game_type: string;

    @Column({
        type: 'enum',
        enum: ['single', 'double', 'round_robin'],
        default: 'single'
    })
    @Field()
    public type: string;

    @Column({
        type: 'enum',
        enum: [8, 16, 32, 64, 128]
    })
    @Field(type => Int)
    public max_players: number;

    @Column()
    @Field(type => Int)
    public race_to: number;

    @Column()
    @Field(type => Int)
    public cover_image: string;

    @Column()
    @Field(type => Date)
    public start_date: Date;

    @Column({
        type: 'enum',
        enum: ['upcoming', 'active', 'finished'],
        default: 'upcoming'
    })
    @Field()
    public status: string;

    @CreateDateColumn()
    @Field(type => Date)
    public created_at: Date;

    @Exclude()
    @UpdateDateColumn()
    @Field(type => Date)
    public updated_at: Date;

    @OneToMany(() => TournamentPlayer, tournament_players => tournament_players.tournaments)
    @JoinColumn()
    @Field(type => [TournamentPlayer])
    public tournament_players: TournamentPlayer
}