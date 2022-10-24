import { Module } from '@nestjs/common';
import { HelloController } from '../controllers/hello.controller';
import { HelloService } from '../services/hello.service';

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [HelloService],
})
export class HelloModule {}
