import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { seedData } from '../../db/seeds/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly connection: DataSource) {}

  async seed(): Promise<void> {
    const queryRunner = this.connection.createQueryRunner(); //1

    await queryRunner.connect(); //2
    await queryRunner.startTransaction(); //3

    try {
      const manager = queryRunner.manager;
      await seedData(manager);

      await queryRunner.commitTransaction(); //4
    } catch (err) {
      console.log('Error during database seeding:', err);
      await queryRunner.rollbackTransaction(); // 5
    } finally {
      await queryRunner.release(); //6
    }
  }
}
