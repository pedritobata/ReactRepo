import { Action, AuthPayload } from '../types/types';

export enum AuthActions {
    loginRequest = "[Auth] login request",
    loginSuccess = "[Auth] login success",
    loginFail = "[Auth] login fail",
}

export const loginRequest = (): Action<AuthPayload> => {
    return {
        type: AuthActions.loginRequest
    }
}

export const loginSuccess = (token: string = '', email: string = ''): Action<AuthPayload> => {
    return {
        type: AuthActions.loginSuccess,
        payload: {
            token, email
        }
    }
}

export const loginFail = (error: string): Action<AuthPayload> => {
    return {
        type: AuthActions.loginFail,
        payload: {
            error
        }
    }
}