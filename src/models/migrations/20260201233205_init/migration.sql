/*
  Warnings:

  - You are about to drop the column `teste` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the `_ProdutoToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ProdutoToUser" DROP CONSTRAINT "_ProdutoToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProdutoToUser" DROP CONSTRAINT "_ProdutoToUser_B_fkey";

-- DropIndex
DROP INDEX "Pedido_data_key";

-- DropIndex
DROP INDEX "Pedido_quantidade_key";

-- DropIndex
DROP INDEX "Pedido_userId_key";

-- DropIndex
DROP INDEX "Produto_data_publicacao_key";

-- AlterTable
ALTER TABLE "Pedido" ALTER COLUMN "forma_pagamento" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "teste",
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ProdutoToUser";

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
