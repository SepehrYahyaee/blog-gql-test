import { commentService } from "../../services/index.js";

export const commentResolvers = {
    async getAllCommentsOnPost() {
        return await commentService.retrieveAllCommentsOnPost(args.postId);
    },
    async getSpecificComment(parent, args) {
        return await commentService.retrieveComment(args.commentId);
    }
}