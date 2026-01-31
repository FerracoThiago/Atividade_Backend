import { PrismaClient } from "@prisma/client";
import { fakerPT_BR } from "@faker-js/faker/.";
import { Prisma } from "../generated/prisma/client";

// npm install @faker-js/faker

export async function userSeeder(prisma: PrismaClient, quantidade: number){

	const user:Prisma.UserCreateInput[] = [];

	for (let i = 0; i < quantidade; i++) {

		user.push({
			nome: fakerPT_BR.internet.username(),
			cpf: fakerPT_BR.string.numeric(11),
			email: fakerPT_BR.internet.email(),
            senha: fakerPT_BR.internet.password(),
            telefone: fakerPT_BR.number.int({ min: 100000000, max: 999999999 }),
            
		})
	}

	await prisma.user.createMany({
		data:user
	})
}