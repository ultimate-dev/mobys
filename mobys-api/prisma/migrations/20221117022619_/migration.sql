/*
  Warnings:

  - Made the column `colors` on table `MarbleBlock` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `MarbleBlock` ADD COLUMN `supplierId` INTEGER NULL,
    MODIFY `colors` JSON NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `supplierId` INTEGER NULL,
    ADD COLUMN `type` ENUM('SUPPLIER', 'CUSTOMER') NOT NULL DEFAULT 'SUPPLIER';

-- CreateTable
CREATE TABLE `Supplier` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('ACTIVE', 'PASSIVE', 'DELETED') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `Supplier`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MarbleBlock` ADD CONSTRAINT `MarbleBlock_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `Supplier`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
