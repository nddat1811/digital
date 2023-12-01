import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { UserComment } from "./user_comment";

@Entity({name: "users"})
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name?: string;

  @Column()
  password?: string;

  @CreateDateColumn({ name: "last_login"})
  lastLogin?: Date;

  @CreateDateColumn({ name: "created_at" })
  createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt?: Date;

  @OneToMany(() => UserComment, (userComments) => userComments.user)
  userComments?: UserComment[];
}
