import { TournamentPlayer } from "src/entities/TournamentPlayer";

export interface CreateMatchInterface {
    createMatch(): void
}

export class Fixture {
    constructor(
        protected players: TournamentPlayer[],
        protected max_players: number
    ) {}

    generate(): void {}
}
