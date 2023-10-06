import { Profile } from "src/entities/Profile";
import { EntitySchema } from "typeorm";

export const ProfileSchema = new EntitySchema<Profile>({
    name: 'Profile',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        image: {
            type: String
        },
        rank: {
            type: Number,
            default: 0
        },
        matches_played: {
            type: Number,
            default: 0
        },
        matches_won: {
            type: Number,
            default: 0
        }
    }
})