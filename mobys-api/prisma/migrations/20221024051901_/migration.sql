/*
  Warnings:

  - You are about to drop the column `dices` on the `MarbleBlock` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `MarbleBlock` DROP COLUMN `dices`,
    ADD COLUMN `dice1` VARCHAR(191) NULL,
    ADD COLUMN `dice2` VARCHAR(191) NULL,
    ADD COLUMN `dice3` VARCHAR(191) NULL,
    ADD COLUMN `dice4` VARCHAR(191) NULL,
    ADD COLUMN `dice5` VARCHAR(191) NULL,
    ADD COLUMN `dice6` VARCHAR(191) NULL;
