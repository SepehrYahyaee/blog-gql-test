import prisma from "../db.js";

export const postService = {
    insertPost() {
        return prisma.post.create({
            data: {
                title: "Test Title For Post",
                content: "Test Content For Post",
                userId: "72bfe4b5-42b9-4d0d-b66c-c83e5d653187"
            }
        })
    },
    retrieveAllPosts() {
        return prisma.post.findMany();
    },
    retrievePost(id) {
        return prisma.post.findUnique({
            where: {
                id
            }
        });
    },
};