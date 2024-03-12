import { Injectable } from '@nestjs/common';

@Injectable()
export class DevConfigService {
  DBHOST = 'localhost';
  getDBHOST() {
    return this.DBHOST;
  }
}
