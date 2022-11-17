-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_supplierId_fkey`;

-- AlterTable
ALTER TABLE `User` MODIFY `supplierId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `Supplier`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
