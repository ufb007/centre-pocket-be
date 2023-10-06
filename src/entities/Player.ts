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

@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    @Index({ unique: true })
    public uuid: string;

    @Column()
    @Index({ unique: true })
    public email: string;

    @Column()
    public password: string;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column()
    public alias: string;

    @Column()
    public phone: string;

    @Column()
    public nationality: string;

    @CreateDateColumn()
    public created_at: Date;

    @UpdateDateColumn()
    public updated_at: Date;

    @OneToOne(() => Profile)
    @JoinColumn({ name: 'profile_id' })
    public profile: Profile;
}
