import { Controller, Get } from '@nestjs/common';
import { HelloService } from '../services/hello.service';

@Controller("hello")
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  async getHello() {
    return await this.helloService.findAll();
  }
}
