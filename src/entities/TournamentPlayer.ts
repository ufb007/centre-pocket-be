import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Tournament } from "./Tournament";
import { Player } from "./Player";
import { Exclude, Expose } from "class-transformer";

@Entity("tournament_players")
@Unique(["tournaments", "players"])
export class TournamentPlayer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: ['yes', 'no', 'pending'],
        default: 'pending'
    })
    public playing: string;

    @Column({
        type: 'enum',
        enum: [0, 1],
        default: 0
    })
    public paid: number;

    @ManyToOne(() => Tournament)
    @JoinColumn({ name: 'tournament_id' })
    public tournaments: Tournament[]

    @ManyToOne(() => Player)
    @JoinColumn({ name: 'player_id' })
    public players: Player[]

    @Expose({name: "createdAt"})
    @CreateDateColumn()
    public created_at: Date;

    @Exclude()
    @UpdateDateColumn()
    public updated_at: Date;
}