import { Action, AuthPayload, AuthState } from "../types/types";
import { AuthActions } from "./authActions";

const authReducer = (
  state: AuthState,
  action: Action<AuthPayload>
): AuthState => {
  switch (action.type) {
    case AuthActions.loginRequest:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActions.loginSuccess:
      return {
        ...state,
        email: action.payload?.email!,
        token: action.payload?.token!,
        error: '',
        isLoading: false,
      };
    case AuthActions.loginFail:
      return {
        ...state,
        email: "",
        token: "",
        isLoading: false,
        error: action.payload?.error!
      };
    default:
      return state;
  }
};

export default authReducer;
