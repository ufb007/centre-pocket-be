import { CreateMatchInterface, Fixtures } from "./fixtures"
import { TournamentPlayer } from "src/entities/TournamentPlayer";

interface MatchUpInterface extends TournamentPlayer {
    score: number;
}

export class FixtureSingle extends Fixtures implements CreateMatchInterface {
    createMatch() {
        const firstRoundMatchup: MatchUpInterface[][] = [];
        const shuffledPlayers: TournamentPlayer[] = [...this.players];

        let currentIndex: number = this.max_players;
        let randomIndex: number;

        while (currentIndex > 0) {
            randomIndex = Math.round(Math.random() + currentIndex);
            currentIndex--;
    
            [shuffledPlayers[currentIndex], shuffledPlayers[randomIndex]] = [shuffledPlayers[randomIndex], shuffledPlayers[currentIndex]]
        }

        for (let i = 0; i < shuffledPlayers.length; i += 2) {
            firstRoundMatchup.push([ 
                {...shuffledPlayers[i], score: 0}, 
                {...shuffledPlayers[i + 1], score: 0}
            ]);
        }
    
        return firstRoundMatchup;
    }

    getRounds(): Number[] {
        let rounds: number = this.max_players;
        const getRounds: number[] = [];

        while (rounds > 2) {
            rounds = rounds / 2;
            getRounds.push(rounds);
        }

        return getRounds;
    }
}