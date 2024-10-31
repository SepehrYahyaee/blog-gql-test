import { postService } from "../../services/index.js";

export const postResolvers = {
    async getAllPosts() {
        return await postService.retrieveAllPosts();
    },
    async getSpecificPost(parent, args) {
        return await postService.retrievePost(args.id);
    }
}