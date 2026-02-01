import { PrismaClient } from "@prisma/client";
import { fakerPT_BR } from "@faker-js/faker/.";
//const { fakerPT_BR } = require('@faker-js/faker');
//import { faker as fakerPT_BR } from '@faker-js/faker/locale/pt_BR';
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
            telefone: fakerPT_BR.number.int(),

		})
	}

	await prisma.user.createMany({
		data:user
	})
}