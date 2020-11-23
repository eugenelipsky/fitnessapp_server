import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { User } from '../entities/user.entity'
import { UsersPrograms } from '../entities/userToProgram.entity'

@Entity('programs')
export class Program {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Column({ name: 'title', length: 100 })
  title: string

  @Column({ name: 'short_description', length: 120 })
  shortDescription: string

  @Column({ name: 'description' })
  description: string

  @ManyToOne(() => User, (users) => users.programsOwner)
  @JoinColumn([{ name: 'owner_id', referencedColumnName: 'id' }])
  owner: User

  @OneToMany(() => UsersPrograms, (usersPrograms) => usersPrograms.program)
  usersPrograms: UsersPrograms[]
}
