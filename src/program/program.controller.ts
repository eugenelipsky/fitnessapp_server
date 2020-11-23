import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import JwtAuthGuard from 'src/auth/jwt-auth.guard'
import { CreateProgramDto } from './dto/create-program.dto'
import { ProgramService } from './program.service'

@Controller('program')
export class ProgramController {
  constructor(private readonly programService: ProgramService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createProgram(@Body() program: CreateProgramDto) {
    return this.programService.createProgram(program)
  }
}
