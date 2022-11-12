import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUSer = (user) => {
    return {USER_ACTION_TYPESSET_CURRENT_USER, user};
}