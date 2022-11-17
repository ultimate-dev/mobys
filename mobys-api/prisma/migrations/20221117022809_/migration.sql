/*
  Warnings:

  - Made the column `supplierId` on table `MarbleBlock` required. This step will fail if there are existing NULL values in that column.
  - Made the column `supplierId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `MarbleBlock` DROP FOREIGN KEY `MarbleBlock_supplierId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_supplierId_fkey`;

-- AlterTable
ALTER TABLE `MarbleBlock` MODIFY `supplierId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `supplierId` INTEGER NOT NULL,
    ALTER COLUMN `type` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `Supplier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MarbleBlock` ADD CONSTRAINT `MarbleBlock_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `Supplier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
