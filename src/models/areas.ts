import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { City } from "./index";

@Entity({ name: "areas" })
export class Area {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name?: string;

  @Column({ name: "detected_time" })
  detectedTime?: Date;

  @CreateDateColumn({ name: "created_at" })
  createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt?: Date;

  @ManyToOne(() => City, (city) => city.cityAreas)
  @JoinColumn({
    name: "city_id",
    referencedColumnName: "id",
  })
  city?: City;
}
