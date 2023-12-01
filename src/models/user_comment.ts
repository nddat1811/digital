import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { City, User, Media } from "./index";

@Entity({name: "user_comments"})
export class UserComment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  content?: string;

  @Column()
  like?: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt?: Date;

  @Column({
    name: "deleted_at",
    type: "boolean", // Use a supported data type (e.g., boolean)
    nullable: true, // Ensure it allows null values if needed
  })
  deletedAt?: boolean | null;

  @ManyToOne(() => City, (city) => city.userComments)
  @JoinColumn({
    name: "city_id",
    referencedColumnName: "id",
  })
  city?: City;

  @OneToOne(() => UserComment)
  @JoinColumn({ name: "parent_review", referencedColumnName: "id" })
  parentReview?: UserComment;

  @ManyToOne(() => User, (user) => user.userComments)
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id",
  })
  user?: User;


  @OneToMany(() => Media, (userMedias) => userMedias.user)
  userMedias?: Media[];
}
