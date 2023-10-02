import { Entity, Column, PrimaryGeneratedColumn, Index } from "typeorm"

@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    public id: Number;

    @Column()
    @Index()
    public uuid: String;

    @Column()
    @Index()
    public email: String;

    @Column()
    public firstName: String;

    @Column()
    public lastName: String;

    @Column()
    public phone: String;

    @Column()
    public nationality: String;
}
