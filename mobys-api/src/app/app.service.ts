import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHelloWorld() {
    return 'Hello World!';
  }
}
