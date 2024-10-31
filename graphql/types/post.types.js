export const Post = `
type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    comments: [Comment!]
}
`;