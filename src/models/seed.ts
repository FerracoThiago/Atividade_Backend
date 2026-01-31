import { PrismaClient } from "@prisma/client";
import { userSeeder } from "./UserSeeder";

const prisma = new PrismaClient();

async function main() {
	await prisma.$connect();

	await userSeeder(prisma,20);

}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e: any) => {
		console.log(e);
		await prisma.$disconnect();
		process.exit(1);
	});