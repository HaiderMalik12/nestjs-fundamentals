import { MigrationInterface, QueryRunner } from "typeorm";

export class RemovedPhone1685010456982 implements MigrationInterface {
    name = 'RemovedPhone1685010456982'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying NOT NULL`);
    }

}
