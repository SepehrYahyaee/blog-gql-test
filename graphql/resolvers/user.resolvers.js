import { userService } from "../../services/index.js";
import { hash } from "../../providers/index.js";

export const userResolvers = {
    async getAllUsers() {
        return await userService.retrieveAllUsers();
    },
    async getSpecificUser(parent, args) {
        return await userService.retrieveUser(args.id);
    },
    async register(parent, args) {
        const user = await userService.retrieveUserByUserName(args.user_name);

        if (user) throw new Error("UserName already exists!");

        const hashedPassword = await hash(args.password);

        return await userService.insertUser(args.user_name, hashedPassword);
    }
}