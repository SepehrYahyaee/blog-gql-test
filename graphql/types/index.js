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
    users: [User!]!
    user(id: ID!): User!
    posts: [Post!]!
    post: Post!
    commentsOnPost(postId: ID!): [Comment!]!
    comment(commentId: ID!): Comment!
}

type Mutation {
    register(user: UserInput!): User
    updateUser(id: ID!, password: String!): User
}

input UserInput {
    user_name: String!
    password: String!
}
`;