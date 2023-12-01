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
import { UserComment } from "./user_comment";

@Entity({ name: "media" })
export class Media {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  url?: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt?: Date;

  @ManyToOne(() => UserComment, (user) => user.userMedias)
  @JoinColumn({
    name: "user_cmt_id",
    referencedColumnName: "id",
  })
  user?: UserComment;
}
