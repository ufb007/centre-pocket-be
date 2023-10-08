import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tournament_players")
export class TournamentPlayer {
    @PrimaryGeneratedColumn()
    id: number;
}