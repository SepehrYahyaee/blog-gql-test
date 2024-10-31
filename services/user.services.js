import prisma from "../db.js";

export const userService = {
    insertUser(user_name, password) {
        return prisma.user.create({
            data: {
                user_name,
                password
            }
        });
    },
    retrieveAllUsers() {
        return prisma.user.findMany();
    },
    retrieveUser(id) {
        return prisma.user.findUnique({
            where: {
                id
            }
        });
    },
    modifyUser(id, password) {
        return prisma.user.update({
            where: {
                id
            },
            data: {
                password
            }
        })
    }
};