export interface IUser {
    id: string,
    roles: string[],
    username: string
}

export  interface AuthState {
    isLoggedIn: boolean,
    user: IUser
}