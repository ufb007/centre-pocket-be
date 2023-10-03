import { Entity, Column, PrimaryGeneratedColumn, Index, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    @Index()
    public uuid: string;

    @Column()
    @Index()
    public email: string;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column()
    public phone: string;

    @Column()
    public nationality: string;

    @CreateDateColumn()
    public created_at: Date;

    @UpdateDateColumn()
    public updated_at: Date;
}
