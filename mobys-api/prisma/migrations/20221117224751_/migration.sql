/*
  Warnings:

  - Made the column `logo` on table `Company` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Company` MODIFY `logo` TEXT NOT NULL;
