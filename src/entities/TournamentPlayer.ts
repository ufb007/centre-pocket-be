import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Tournament } from "src/tournaments/tournaments.entities"; 
import { Player } from "src/players/players.entities"; 
import { Exclude, Expose } from "class-transformer";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity("tournament_players")
@Unique(["tournaments", "players"])
@ObjectType()
export class TournamentPlayer {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column({
        type: 'enum',
        enum: ['yes', 'no', 'pending'],
        default: 'pending'
    })
    @Field()
    public playing: string;

    @Column({
        type: 'enum',
        enum: [0, 1],
        default: 0
    })
    @Field(type => Int)
    public paid: number;

    @ManyToOne(() => Tournament)
    @JoinColumn({ name: 'tournament_id' })
    @Field(type => Tournament)
    public tournaments: Tournament[]

    @ManyToOne(() => Player)
    @JoinColumn({ name: 'player_id' })
    @Field(type => Player)
    public players: Player[]

    @Expose({name: "createdAt"})
    @CreateDateColumn()
    @Field(type => Date)
    public created_at: Date;

    @Exclude()
    @UpdateDateColumn()
    @Field(type => Date)
    public updated_at: Date;
}