export const Comment = `
type Comment {
    id: ID!
    content: String!
    author: User!
    onPost: Post!
}
`;