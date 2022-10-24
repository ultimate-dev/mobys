/*
  Warnings:

  - Made the column `dice1` on table `MarbleBlock` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dice2` on table `MarbleBlock` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dice3` on table `MarbleBlock` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dice4` on table `MarbleBlock` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dice5` on table `MarbleBlock` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dice6` on table `MarbleBlock` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `MarbleBlock` ADD COLUMN `class` ENUM('A', 'B', 'C') NULL,
    ADD COLUMN `color` VARCHAR(191) NULL,
    MODIFY `dice1` TEXT NOT NULL,
    MODIFY `dice2` TEXT NOT NULL,
    MODIFY `dice3` TEXT NOT NULL,
    MODIFY `dice4` TEXT NOT NULL,
    MODIFY `dice5` TEXT NOT NULL,
    MODIFY `dice6` TEXT NOT NULL;
