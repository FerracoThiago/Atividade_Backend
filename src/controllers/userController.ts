import { prisma } from "../config/prisma";
import { Request, Response } from 'express';
import { Prisma } from "../generated/prisma/client";


export class UserController{

    public static async createUser(request:Request,response:Response){
        try {
            
            const {nome, email, senha, telefone, cpf} = request.body

            const createInput: Prisma.UserCreateInput = {
                nome:nome,
                email:email,
                senha:senha,
                telefone:telefone,
                cpf:cpf

            }

            const createUser = await prisma.user.create({
                data:createInput
            });

            response.status(201).json(createUser)



        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

    public static async readUser(request:Request,response:Response){
        try {

            const { userId } = request.params;

            const foundUser = await prisma.user.findUnique({
                where: {
                    id:userId as string
                },
            });

            response.status(200).json(foundUser)

        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

    public static async readAllUsers(request:Request,response:Response){
        try {


            const users = await prisma.user.findMany();
            

            response.status(200).json(users)

        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

    public static async updateUser(request:Request,response:Response){
        try {
            
            const {userId} = request.params
            const {nome, email, senha, telefone, cpf} = request.body

            const createInput: Prisma.UserUpdateInput = {
                nome:nome,
                email:email,
                senha:senha,
                telefone:telefone,
                cpf:cpf

            }

            const updatedUser = await prisma.user.update({
                data:createInput,
                where:{
                        id:userId as string
                }
            });

            response.status(200).json(updatedUser)



        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

    public static async upsertUser(request:Request,response:Response){
        try {
            
            const {userId} = request.params
            const {nome, email, senha, telefone, cpf} = request.body

            const createInput: Prisma.UserCreateInput = {
                nome:nome,
                email:email,
                senha:senha,
                telefone:telefone,
                cpf:cpf,

            }
            
            const updateInput: Prisma.UserUpdateInput = {
                nome:nome,
                email:email,
                senha:senha,
                telefone:telefone,
                cpf:cpf,

            }

            const updatedUser = await prisma.user.upsert({
                create:createInput,
                update:updateInput,
                where:{
                        id:userId as string
                }
            });

            response.status(200).json(updatedUser)



        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

    public static async deleteUser(request:Request,response:Response){
        try {

            const {userId} = request.params

            const deletedUser = await prisma.user.delete({
                where:{
                    id:userId as string
                }
            });
            

            response.status(200).json(deletedUser)

        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

    public static async deleteAllUser(request:Request,response:Response){
        try {

            const deletedUser = await prisma.user.deleteMany();
            

            response.status(200).json(deletedUser)

        } catch (error: any) {
            response.status(500).json({message:error.message})
            
        }
    }

}