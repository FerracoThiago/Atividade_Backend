/*
  Warnings:

  - Changed the type of `data_publicacao` on the `Produto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "data_publicacao",
ADD COLUMN     "data_publicacao" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Produto_data_publicacao_key" ON "Produto"("data_publicacao");
