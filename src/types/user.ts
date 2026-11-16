export interface User {
    id: string;
    email: string;
    name: string;
    username: string;
    roles: Array<Role>;
}

export interface Role {
    id: string;
    name: string;
}