import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateUserDto } from 'src/user/dto/create-user.dto'
import { UserService } from 'src/user/user.service'
const bcrypt = require('bcrypt')
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  public async register(registerData: CreateUserDto) {
    const hashPassword = await bcrypt.hash(registerData.password, 10)

    try {
      const user = this.userService.createUser({
        ...registerData,
        password: hashPassword,
      })
      return user
    } catch (e) {
      throw new HttpException('Server error:', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  public async login(email: string, password: string) {
    try {
      const user = await this.userService.findUserByEmail(email)
      await this.verifyPassword(password, user.password)
      return user
    } catch (e) {
      throw new HttpException('Wrong credentials', HttpStatus.BAD_REQUEST)
    }
  }

  private async verifyPassword(value: string, hashedPassword: string) {
    const isMatch = await bcrypt.compare(value, hashedPassword)
    if (!isMatch) {
      throw new HttpException('Wrong credentials', HttpStatus.BAD_REQUEST)
    }
  }

  public getCookieWithJwtToken(userId: number) {
    const payload: TokenPayload = { userId }
    const token = this.jwtService.sign(payload)
    return `Authentication=${token} ; Path=/; HttpOnly; Max-Age=${this.configService.get(
      'JWT_EXPIRATION_TIME'
    )}`
  }

  public getToken(userId: number) {
    const payload: TokenPayload = { userId }
    const token = this.jwtService.sign(payload)
    return token
  }

  public getCookieForLogout() {
    return `Authentication=; HttpOnly; Path=/; Max-Age=0`
  }
}
