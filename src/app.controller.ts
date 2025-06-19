import { Body, Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { wsServer } from 'websocket'
import { SendMessageRequestDto } from './common/domain/dtos/requests/send-message.request.dto'

@Controller()
export class AppController {
  private websocketServer = wsServer

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Post('send-message')
  sendMessage(@Body() request: SendMessageRequestDto): void {
    const message = {
      type: 'message',
      message: request.message
    }
    this.websocketServer.sendToUser(request.userId, message)
  }
}
