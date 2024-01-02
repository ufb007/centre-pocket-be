import { CreateMatchInterface, Fixture } from "./fixture"

export class FixtureSingle extends Fixture implements CreateMatchInterface {
    createMatch(): void {
        console.log(this.players)
    }
}