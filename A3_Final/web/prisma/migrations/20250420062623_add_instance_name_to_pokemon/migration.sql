/*
  Warnings:

  - A unique constraint covering the columns `[instance_name]` on the table `Pokemon` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Pokemon" ADD COLUMN     "instance_name" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_instance_name_key" ON "Pokemon"("instance_name");
