import prisma from "../db.js";
import { hash } from "../providers/index.js";

async function main() {
    await prisma.user.deleteMany();

    await prisma.user.create({
        data: {
            user_name: "test",
            password: await hash("123"),
        }
    })

    console.log("Seed Generated!");
}

main();