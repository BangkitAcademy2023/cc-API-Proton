-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jumlahProduk` INTEGER NOT NULL,
    `namaProduk` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `tipe` VARCHAR(191) NOT NULL,
    `harga` INTEGER NOT NULL,
    `hargaJual` INTEGER NOT NULL,
    `expiredDate` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
