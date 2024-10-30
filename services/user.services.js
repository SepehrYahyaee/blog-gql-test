import prisma from "../db.js";

export const userService = {
    insertUser(userName, password) {
        return prisma.user.create({
            data: {
                user_name: userName,
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
    retrieveUserByUserName(userName) {
        return prisma.user.findUnique({
            where: {
                user_name: userName
            }
        });
    }
};