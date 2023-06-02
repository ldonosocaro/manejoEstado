import { User } from "../models/user";

export interface UserResponse {
    status: string;
    response: User;
}
