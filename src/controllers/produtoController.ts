
import { prisma } from "../config/prisma";
import { Request, Response } from 'express';
import { Prisma } from "../generated/prisma/client";


export class ProdutoController{

    public static async createProduto(request:Request,response:Response){
        try {
            

            const {preco, categoria, data_publicacao, descricao, titulo,condicao,usuarioId} = request.body

            const createInput: Prisma.ProdutoCreateInput = {
                preco:preco,
                categoria:categoria,
                data_publicacao:data_publicacao,
                descricao:descricao,
                titulo:titulo,
                condicao:condicao,
                usuarios:{
                    connect:usuarioId.map((id: number) => ({ id:Number(id) })),
                }

            }

            const createProduto = await prisma.produto.create({
                data:createInput
            });

            response.status(201).json(createProduto)



        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

    public static async readProduto(request:Request,response:Response){
        try {

            const { produtoId } = request.params;

            const foundProduto = await prisma.produto.findUnique({
                where: {
                    id:Number(produtoId)
                },
                include:{
                    usuarios:{
                        select:{
                            id:true,
                            nome:true,
                        }
                    },
                    pedidos:{
                        select:{
                            id:true
            
                    }
                },
                },
            });

            response.status(200).json(foundProduto)

        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

    public static async readAllProdutos(request:Request,response:Response){
        try {


            const produtos = await prisma.produto.findMany();
            

            response.status(200).json(produtos)

        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

    public static async updateProduto(request:Request,response:Response){
        try {
            
            const {produtoId} = request.params
            const {preco, categoria, data_publicacao, descricao, titulo,condicao,usuarios} = request.body

            const createInput: Prisma.ProdutoUpdateInput = {
                preco:preco,
                categoria:categoria,
                data_publicacao:data_publicacao,
                descricao:descricao,
                titulo:titulo,
                condicao:condicao,
                usuarios:usuarios

            }

            const updatedProduto = await prisma.produto.update({
                data:createInput,
                where:{
                        id:Number(produtoId)
                }
            });

            response.status(200).json(updatedProduto)



        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

    public static async upsertProduto(request:Request,response:Response){
        try {
            
            const {produtoId} = request.params
            const {preco, categoria, data_publicacao, descricao, titulo,condicao,usuarios} = request.body

            const createInput: Prisma.ProdutoCreateInput = {
                preco:preco,
                categoria:categoria,
                data_publicacao:data_publicacao,
                descricao:descricao,
                titulo:titulo,
                condicao:condicao,
                usuarios:usuarios

            }
            
            const updateInput: Prisma.ProdutoUpdateInput = {
                preco:preco,
                categoria:categoria,
                data_publicacao:data_publicacao,
                descricao:descricao,
                titulo:titulo,
                condicao:condicao,
                usuarios:usuarios

            }

            const updatedProduto = await prisma.produto.upsert({
                create:createInput,
                update:updateInput,
                where:{
                        id:Number(produtoId)
                }
            });

            response.status(200).json(updatedProduto)



        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

    public static async deleteProduto(request:Request,response:Response){
        try {

            const {produtoId} = request.params

            const deletedProduto = await prisma.produto.delete({
                where:{
                    id:Number(produtoId)
                }
            });
            

            response.status(200).json(deletedProduto)

        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

    public static async deleteAllProdutos(request:Request,response:Response){
        try {

            const deletedProduto = await prisma.produto.deleteMany();
            

            response.status(200).json(deletedProduto)

        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

}
