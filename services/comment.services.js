import prisma from "../db.js";

export const commentService = {
    insertComment() {
        return prisma.comment.create({
            data: {
                content: "Test Content For Comment",
                userId: "72bfe4b5-42b9-4d0d-b66c-c83e5d653187",
                postId: 1
            }
        })
    },
    retrieveAllCommentsOnPost(postId) {
        return prisma.comment.findMany({
            where: {
                postId
            }
        });
    },
    retrieveComment(commentId) {
        return prisma.comment.findUnique({
            where: {
                id: commentId
            }
        });
    },
};