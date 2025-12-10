export interface LoginFormType {
    id: string,
    password: string
}

export interface AccountFormType {
    user_id: string,
    username: string,
    role: string,
    status: string,
    password: string
}

export interface UserType {
    id: number;
    user_id: string;
    username: string;
    status: string | null;
    role: "STUDENT" | "STAFF" | "ADMIN";
    created_at: String | null;
    updated_at: String | null;
}
