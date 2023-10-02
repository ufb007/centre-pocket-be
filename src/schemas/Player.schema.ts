import { EntitySchema } from "typeorm";
import { Player } from "src/entities/Player";

export const PlayerSchema = new EntitySchema<Player>({
    name: 'Player',
    columns: {
        id: {
            type: String,
            primary: true,
            generated: true
        },
        uuid: {
            type: String,
            unique: true
        },
        email: {
            type: String,
            unique: true
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        phone: {
            type: String
        },
        nationality: {
            type: String
        }
    }
})