
import { prisma } from "../config/prisma";
import { Request, Response } from 'express';
import { Prisma } from "../generated/prisma/client";


export class PedidoController{

    public static async createPedido(request:Request,response:Response){
        try {
            

            const {quantidade,data,userId,produtoId,valor,forma_pagamento,status} = request.body

            const createInput: Prisma.PedidoCreateInput = {
                quantidade:quantidade,
                data:data,
                valor:valor,
                forma_pagamento:forma_pagamento,
                status:status,
                user:{connect:{id:userId}},
                produtos: {
                        connect: produtoId.map((id: number) => ({ id: Number(id) }))
                    },
            }
            const createPedido = await prisma.pedido.create({
                data:createInput,
                include: {
                    produtos: true,
                    user: { select: { nome: true, email: true } }
                }
            });

            response.status(201).json(createPedido)



        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

    public static async readPedido(request:Request,response:Response){
        try {

            const { pedidoId } = request.params;

            const foundPedido = await prisma.pedido.findUnique({
                where: {
                    id:pedidoId as string
                },
                include:{
                    user: true,
                    produtos:true
                },
            });

            response.status(200).json(foundPedido)

        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

    public static async readAllPedidos(request:Request,response:Response){
        try {


            const produtos = await prisma.pedido.findMany({
                include:{
                    user:{
                        select:{
                            id:true,
                            nome:true,
                            email:true
                        }
                    },
                    produtos:true
                },
            });
            

            response.status(200).json(produtos)

        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

    public static async updatePedido(request:Request,response:Response){
        try {
            
            const {pedidoId} = request.params
            const {quantidade,data,valor,forma_pagamento,status,produtoId} = request.body
            const createInput: Prisma.PedidoUpdateInput = {
                quantidade:quantidade,
                data:data,
                valor:valor,
                forma_pagamento:forma_pagamento,
                status:status,
                produtos: {
                    set: produtoId.map((id: number | String) => ({ id: Number(id) }))
                },

            }

            const updatedPedido = await prisma.pedido.update({
                data:createInput,
                where:{
                        id:pedidoId as string
                }
            });

            response.status(200).json(updatedPedido)



        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

    public static async deletePedido(request:Request,response:Response){
        try {

            const {pedidoId} = request.params

            const deletedPedido = await prisma.pedido.delete({
                where:{
                    id:pedidoId as string
                }
            });
            

            response.status(200).json(deletedPedido)

        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

    public static async deleteAllPedidos(request:Request,response:Response){
        try {

            const deletedPedido = await prisma.pedido.deleteMany();
            

            response.status(200).json(deletedPedido)

        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

}
