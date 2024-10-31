import { postResolvers } from "./post.resolvers.js";
import { userResolvers } from "./user.resolvers.js";
import { commentResolvers } from "./comment.resolvers.js";
import prisma from "../../db.js";

export const resolvers = {
    Query: {
        users: userResolvers.getAllUsers,
        user: userResolvers.getSpecificUser,
        posts: postResolvers.getAllPosts,
        post: postResolvers.getSpecificPost,
        commentsOnPost: commentResolvers.getAllCommentsOnPost,
        comment: commentResolvers.getSpecificComment,
    },
    Mutation: {
        register: userResolvers.register,
    },
    User: {
        async posts(parent) {
            return await prisma.post.findMany({
                where: {
                    userId: parent.id,
                }
            })
        },
        async comments(parent) {
            return await prisma.comment.findMany({
                where: {
                    userId: parent.id,
                }
            })
        },
    },
    Post: {
        async user(parent) {
            return await prisma.user.findUnique({
                where: {
                    id: parent.postId,
                }
            })
        },
        async comments(parent) {
            return await prisma.comment.findMany({
                where: {
                    postId: parent.id,
                }
            })
        },
    },
    Comment: {
        async post(parent) {
            return await prisma.post.findUnique({
                where: {
                    id: parent.postId,
                }
            })
        },
        async user(parent) {
            return await prisma.user.findUnique({
                where: {
                    id: parent.userId,
                }
            })
        },
    }
}