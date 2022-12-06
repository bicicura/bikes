/*
  Warnings:

  - You are about to drop the column `body` on the `Brand` table. All the data in the column will be lost.
  - You are about to drop the column `body` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Brand" DROP COLUMN "body",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "slug" TEXT;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "body",
DROP COLUMN "published",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "price" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "slug" TEXT;
