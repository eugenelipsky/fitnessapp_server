import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/entities/user.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async getAllUsers() {
    return await this.userRepository.find()
  }

  async getById(id: number) {
    const user = this.userRepository.findOne({ id })
    if (user) {
      return user
    }
    throw new HttpException('User id does not exists', HttpStatus.NOT_FOUND)
  }

  async findUserByEmail(email: string) {
    const user = this.userRepository.findOne({ email })
    if (!user) {
      throw new Error('User does not exists')
    }
    return user
  }

  async createUser(userData: CreateUserDto) {
    const user = await this.userRepository.create(userData)
    await this.userRepository.save(user)
    return user
  }

  async removeUser(id: number): Promise<void> {
    await this.userRepository.delete(id)
  }

  async updateUser(id: number, updateData: object): Promise<void> {
    await this.userRepository.update(id, updateData)
  }
}
