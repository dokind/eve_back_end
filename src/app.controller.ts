import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('init')
  getProfile(@Request() req) {
    return req.user;
  }
  @Get('version')
  getVersion(@Request() req) {
    return '1.0.0';
  }
}
