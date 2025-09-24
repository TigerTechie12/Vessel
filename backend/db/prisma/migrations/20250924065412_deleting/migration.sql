/*
  Warnings:

  - You are about to drop the `Secret` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Secret" DROP CONSTRAINT "Secret_userId_fkey";

-- DropTable
DROP TABLE "public"."Secret";
