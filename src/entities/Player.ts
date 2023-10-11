import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    Index, 
    CreateDateColumn, 
    UpdateDateColumn, 
    OneToOne, 
    JoinColumn 
} from "typeorm"
import { Profile } from "./Profile";
import { Exclude, Expose } from "class-transformer";

@Entity('players')
export class Player {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    @Index({ unique: true })
    public uuid: string;

    @Column()
    @Index({ unique: true })
    public email: string;

    @Exclude()
    @Column({ default: null })
    public password: string;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column({ default: null })
    public alias: string;

    @Column({ default: null })
    public phone: string;

    @Column({ default: null })
    public nationality: string;

    @Expose({ name: 'createdAt' })
    @CreateDateColumn()
    public created_at: Date;

    @Exclude()
    @UpdateDateColumn()
    public updated_at: Date;

    @OneToOne(() => Profile)
    @JoinColumn({ name: 'profile_id' })
    public profile: Profile;
}
