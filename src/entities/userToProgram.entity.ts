import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Program } from '../entities/program.entity'
import { UserRoles } from '../entities/roles.entity'
import { User } from '../entities/user.entity'

@Entity('users_programs')
export class UsersPrograms {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @ManyToOne(() => Program, (programs) => programs.usersPrograms)
  @JoinColumn([{ name: 'program_id', referencedColumnName: 'id' }])
  program: Program

  @ManyToOne(() => UserRoles, (userRoles) => userRoles.usersPrograms)
  @JoinColumn([{ name: 'role_id', referencedColumnName: 'id' }])
  role: UserRoles

  @ManyToOne(() => User, (users) => users.workouts)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User
}
