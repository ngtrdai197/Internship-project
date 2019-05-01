import { UserRole } from "src/user/user-role.enum";

export interface JwtPayload {
    username: string;
    role?: UserRole;
}