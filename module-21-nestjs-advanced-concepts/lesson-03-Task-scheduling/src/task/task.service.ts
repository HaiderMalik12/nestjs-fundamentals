import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  @Cron('0 * * * * *')
  myCronTask() {
    this.logger.debug('Cron Task Called');
  }
}
