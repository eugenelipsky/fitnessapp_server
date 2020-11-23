import { IsNotEmpty } from 'class-validator'

export class CreateProgramDto {
  @IsNotEmpty()
  readonly title: string

  @IsNotEmpty()
  readonly short_description: string

  @IsNotEmpty()
  readonly description: string

  @IsNotEmpty()
  readonly owner_id: number
}
