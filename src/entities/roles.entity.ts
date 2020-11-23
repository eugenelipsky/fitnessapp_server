import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { UsersPrograms } from '../entities/userToProgram.entity'

@Entity('user_roles', { schema: 'public' })
export class UserRoles {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Column({ name: 'name' })
  name: string

  @OneToMany(() => UsersPrograms, (usersPrograms) => usersPrograms.role)
  usersPrograms: UsersPrograms[]
}
