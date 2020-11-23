import { Controller, Get, Param } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers()
  }

  @Get('/:id')
  async getById(@Param('id') id: number) {
    return await this.userService.getById(id)
  }
}
