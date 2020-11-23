import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Program } from '../entities/program.entity'
import { UsersPrograms } from '../entities/userToProgram.entity'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Column({ name: 'first_name', length: 255 })
  firstName: string

  @Column({ name: 'last_name', length: 255 })
  lastName: string

  @Column({ name: 'email', length: 255 })
  email: string

  @Column({ name: 'password' })
  password: string

  @OneToMany(() => Program, (programs) => programs.owner, { eager: true })
  programsOwner: Program[]

  @OneToMany(() => UsersPrograms, (usersPrograms) => usersPrograms.user, {
    eager: true,
  })
  workouts: UsersPrograms[]
}
