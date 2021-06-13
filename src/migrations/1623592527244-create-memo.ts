import { MigrationInterface, QueryRunner } from 'typeorm';

export class createMemo1623592527244 implements MigrationInterface {
  name = 'createMemo1623592527244';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "memo" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(500) NOT NULL, "description" text NOT NULL)`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "memo"`, undefined);
  }
}
