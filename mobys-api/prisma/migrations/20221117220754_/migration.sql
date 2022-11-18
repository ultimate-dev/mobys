/*
  Warnings:

  - You are about to drop the column `supplierId` on the `MarbleBlock` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `supplierId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Supplier` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `companyId` to the `MarbleBlock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `MarbleBlock` DROP FOREIGN KEY `MarbleBlock_supplierId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_supplierId_fkey`;

-- AlterTable
ALTER TABLE `MarbleBlock` DROP COLUMN `supplierId`,
    ADD COLUMN `companyId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `role`,
    DROP COLUMN `supplierId`,
    ADD COLUMN `companyId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Supplier`;

-- CreateTable
CREATE TABLE `Company` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('ACTIVE', 'PASSIVE', 'DELETED') NOT NULL DEFAULT 'ACTIVE',
    `type` ENUM('SUPPLIER', 'CUSTOMER') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MarbleBlock` ADD CONSTRAINT `MarbleBlock_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
