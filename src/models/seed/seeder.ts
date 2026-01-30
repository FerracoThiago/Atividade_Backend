import { PrismaClient } from "../../generated/prisma/client";
import { userSeeder } from "./UserSeeder";
import { PrismaPg } from '@prisma/adapter-pg'
const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter });

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
