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
import { Profile } from "src/entities/Profile"; 
import { Exclude, Expose } from "class-transformer";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity('players')
@ObjectType()
export class Player {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    public id: number;

    @Column()
    @Index({ unique: true })
    @Field()
    public uuid: string;

    @Column()
    @Index({ unique: true })
    @Field()
    public email: string;

    @Exclude()
    @Column({ default: null })
    public password: string;

    @Column()
    @Field()
    public firstName: string;

    @Column()
    @Field()
    public lastName: string;

    @Column({ default: null })
    @Field({ nullable: true })
    public alias: string;

    @Column({ default: null })
    @Field()
    public phone: string;

    @Column({ default: null })
    @Field()
    public nationality: string;

    @Expose({ name: 'createdAt' })
    @CreateDateColumn({ name: 'created_at' })
    @Field(type => Date)
    public createdAt: Date;

    @Exclude()
    @UpdateDateColumn({ name: 'updated_at' })
    @Field(type => Date)
    public updatedAt: Date;

    @OneToOne(() => Profile)
    @JoinColumn({ name: 'profile_id' })
    @Field(type => Profile, { nullable: true })
    public profile: Profile;
}
