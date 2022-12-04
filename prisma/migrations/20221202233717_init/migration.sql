/*
  Warnings:

  - You are about to drop the column `bio` on the `Brand` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Product` table. All the data in the column will be lost.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Brand" DROP COLUMN "bio",
ADD COLUMN     "body" TEXT,
ADD COLUMN     "title" TEXT;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "content",
DROP COLUMN "title",
ADD COLUMN     "body" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" VARCHAR(255) NOT NULL;
