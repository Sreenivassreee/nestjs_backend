import {
  Column,
  Entity,
  EntityManager,
  EntitySchema,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Status } from './task-enum';
@Entity()
export class Task extends EntityManager {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  status: Status;
}
