import React, { useReducer } from "react";
import { AppState, AuthState, CollaboratorsState } from "../types/types";
import authReducer from "./authReducer";
import collabsReducer from "./collabsReducer";

const initialState: AppState = {
  auth: {
    token: "",
    email: "",
    error: "",
    isLoading: false,
  },
  collabs: {
    collabs: [],
    collabsFiltered: [],
    error: "",
    isLoading: false,
    page: 0,
  },
};

export interface AppContext {
  authState: AuthState;
  collabsState: CollaboratorsState;
  setAuthState: Function;
  setCollabsState: Function;
}

export const Context = React.createContext<AppContext>({
  authState: initialState.auth,
  collabsState: initialState.collabs,
  setAuthState: () => {},
  setCollabsState: () => {},
});
const Provider = ({ children }: any) => {
  const [authData, dispatchAuth] = useReducer(authReducer, {
    ...initialState.auth,
    token: localStorage.getItem("token") || ''
  });
  const [collabsData, dispatchCollabs] = useReducer(
    collabsReducer,
    initialState.collabs
  );
  return (
    <Context.Provider
      value={{
        authState: authData,
        collabsState: collabsData,
        setAuthState: dispatchAuth,
        setCollabsState: dispatchCollabs,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
