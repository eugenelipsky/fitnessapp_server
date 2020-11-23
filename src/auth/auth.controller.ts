import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common'
import { Response } from 'express'
import { CreateUserDto } from 'src/user/dto/create-user.dto'
import { AuthService } from './auth.service'
import JwtAuthGuard from './jwt-auth.guard'
import { LocalAuthGuard } from './LocalAuthGuard.guard'
import RequestWithUser from './requestWithUser.interface'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerData: CreateUserDto) {
    return await this.authService.register(registerData)
  }

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() request: RequestWithUser, @Res() response: Response) {
    const user = request.user
    const token = this.authService.getToken(user.id)
    // const cookie = this.authService.getCookieWithJwtToken(user.id)
    // response.setHeader('Set-Cookie', cookie)

    const userResponse = {
      id: user.id,
      firstname: user.firstName,
      lastname: user.lastName,
      email: user.email,
    }

    return response.send({ userResponse, token })
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout(@Req() request: RequestWithUser, @Res() response: Response) {
    response.setHeader('Set-Cookie', this.authService.getCookieForLogout())
    return response.sendStatus(200)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  authenticate(@Req() request: RequestWithUser) {
    const user = request.user
    return user
  }
}
