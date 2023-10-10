import { Column, CreateDateColumn, Entity, Generated, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TournamentPlayer } from "./TournamentPlayer";

export type GameType = "9ball" | "8ball" | "10ball" | "straight";

@Entity('tournaments')
export class Tournament {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    @Generated("uuid")
    public uuid: string;

    @Column()
    public name: string;

    @Column({ type: 'text' })
    public description: string;

    @Column({
        type: 'enum',
        enum: ["9ball", "8ball", "10ball", "straight"],
        default: "9ball"
    })
    public game_type: GameType[];

    @Column({
        type: 'enum',
        enum: ['single', 'double', 'round_robin'],
        default: 'single'
    })
    public type: string;

    @Column({
        type: 'enum',
        enum: [8, 16, 32, 64, 128]
    })
    public max_players: number;

    @Column()
    public race_to: number;

    @Column()
    public cover_image: string;

    @Column()
    public start_date: Date;

    @Column({
        type: 'enum',
        enum: ['upcoming', 'active', 'finished'],
        default: 'upcoming'
    })
    public status: string;

    @CreateDateColumn()
    public created_at: Date;

    @UpdateDateColumn()
    public updated_at: Date;

    @OneToMany(() => TournamentPlayer, tournament_players => tournament_players.tournaments)
    @JoinColumn()
    public tournament_players: TournamentPlayer
}