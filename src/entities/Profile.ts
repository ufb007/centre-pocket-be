import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('profiles')
@ObjectType()
export class Profile {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    public id: number;

    @Column()
    @Field()
    public image: string;

    @Column()
    @Field(type => Int)
    public rank: number;

    @Column()
    @Field(type => Int)
    public matches_played: number;

    @Column()
    @Field(type => Int)
    public matches_won: number;
}