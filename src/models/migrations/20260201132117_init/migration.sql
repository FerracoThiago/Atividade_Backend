/*
  Warnings:

  - Changed the type of `data` on the `Pedido` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "data",
ADD COLUMN     "data" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_data_key" ON "Pedido"("data");
