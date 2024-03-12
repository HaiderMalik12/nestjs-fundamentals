import { Inject, Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigService';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello I am learning Nest.js Fundamentals';
  }
}
