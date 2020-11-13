import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

enum requestStatus {
  Pending,
  Approved,
  Rejected
}

@Entity('users_programs')
export class UserToProgram {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'is_accepted'})
  isAccepted: requestStatus
}

//TODO
//userId
//programId
//roleId
