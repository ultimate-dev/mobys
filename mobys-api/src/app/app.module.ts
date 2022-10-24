import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '../database/database.module';
import { ConfigModule } from '@nestjs/config';
import { HelloModule } from 'src/routes/modules/hello.module';

@Module({
  imports: [
    // Env
    ConfigModule.forRoot({ isGlobal: true }),
    // Database
    DatabaseModule,
    // Routes
    HelloModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
