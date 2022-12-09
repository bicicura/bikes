/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.
  - Made the column `slug` on table `Brand` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Brand" ALTER COLUMN "slug" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Brand_slug_key" ON "Brand"("slug");
