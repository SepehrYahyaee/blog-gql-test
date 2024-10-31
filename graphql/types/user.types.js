export const User = `
type User {
    id: ID!
    user_name: String!
    password: String!
    role: String!
    posts: [Post!]
    comments: [Comment!]
}
`;