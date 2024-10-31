import { userService } from "../../services/index.js";

export const userResolvers = {
    async getAllUsers() {
        return await userService.retrieveAllUsers();
    },
    async getSpecificUser(parent, args) {
        return await userService.retrieveUser(args.id);
    },
    async register(parent, args) {
        return await userService.insertUser(args.user.user_name, args.user.password);
    },
    async updateUser(parent, args) {
        return await userService.modifyUser(args.id, args.password);
    }
}