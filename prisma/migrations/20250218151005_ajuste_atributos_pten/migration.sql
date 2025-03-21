/*
  Warnings:

  - The values [CONFIRMED,IN_PROGRESS,DELIVERED,CANCELED] on the enum `OrderStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `descricao` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `description` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('PENDING', 'IN_PREPARATION', 'FINISHED');
ALTER TABLE "Order" ALTER COLUMN "status" TYPE "OrderStatus_new" USING ("status"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "OrderStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "descricao",
DROP COLUMN "endereco",
DROP COLUMN "telefone",
ADD COLUMN     "description" TEXT NOT NULL;
