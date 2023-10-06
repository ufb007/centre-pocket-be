import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public image: string;

    @Column()
    public rank: number;

    @Column()
    public matches_played: number;

    @Column()
    public matches_won: number;
}