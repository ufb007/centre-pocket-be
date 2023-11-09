import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "src/players/players.entities"; 
import { Tournament } from "src/tournaments/tournaments.entities";

@Entity('fixtures')
export class Fixture {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    player_1_score: number;

    @Column()
    player_2_score: number;

    @Column({ default: 1 })
    round: number;

    @Column({ default: 0 })
    winner: number;

    @ManyToOne(() => Tournament)
    @JoinColumn({ name: 'Tournament_id' })
    tournament: Tournament

    @ManyToOne(() => Player)
    @JoinColumn({ name: 'player_1' })
    player_1: Player

    @ManyToOne(() => Player)
    @JoinColumn({ name: 'player_2' })
    player_2: Player
}