import { User } from "./user.types.js";
import { Profile } from "./profile.types.js";
import { Post } from "./post.types.js";
import { Comment } from "./comment.types.js";

export const typeDefs = `#graphql
${User}
${Profile}
${Post}
${Comment}

type Query {
    users: [User]
    user(id: ID!): User
}

type Mutation {
    register(user: UserInput!): User
}

input UserInput {
    user_name: String!
    password: String!
}
`;