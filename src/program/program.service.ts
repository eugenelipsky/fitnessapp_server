import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Program } from 'src/entities/program.entity'
import { Repository } from 'typeorm'
import { CreateProgramDto } from './dto/create-program.dto'

@Injectable()
export class ProgramService {
  constructor(
    @InjectRepository(Program)
    private programRepository: Repository<Program>
  ) {}

  async createProgram(programData: CreateProgramDto) {
    const program = await this.programRepository.create(programData)
    await this.programRepository.save(program)
    return program
  }
}
