import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [EventsModule],
})
export class AppModule {}
