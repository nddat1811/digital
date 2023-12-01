import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Area, UserComment,  } from "./index";

@Entity({ name: "cities" })
export class City {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name?: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt?: Date;

  @OneToMany(() => Area, (cityAreas) => cityAreas.city)
  cityAreas?: Area[];

  @OneToMany(() => UserComment, (userComments) => userComments.city)
  userComments?: UserComment[];
}
