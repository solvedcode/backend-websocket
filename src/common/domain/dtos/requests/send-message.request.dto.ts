import { IsNumber, IsString } from 'class-validator'

export class SendMessageRequestDto {
  @IsNumber()
  userId: number

  @IsString()
  message: string
}
