import prisma from "../db.js";
import { hash } from "../providers/index.js";
import { userService, postService } from "../services/index.js";

async function main() {
    // await prisma.user.deleteMany();
    await prisma.post.deleteMany();

    // await userService.insertUser("test", await hash("123"));
    await postService.insertPost();

    console.log("Seed Generated!");
}

main();