import { userResolvers } from "./user.resolvers.js";

export const resolvers = {
    Query: {
        users: userResolvers.getAllUsers,
        user: userResolvers.getSpecificUser,
    },
    Mutation: {
        register: userResolvers.register,
    }
}