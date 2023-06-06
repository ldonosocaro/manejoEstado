import { User } from "../models/user";

export interface UsersResponse {
    status: string;
    response: User[];
}
