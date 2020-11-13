import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('programs')
export class Program {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({name: 'short_description'})
  shortDescription: string;

  @Column()
  description: string;
}
