// DTO
export interface Response<T> {
    errorMessage: string;
    data: T;
}

export interface LoginResponse {
    token: string;
}

export interface CollabsResponse {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Collab[];
    support:     Support;
}

export interface Collab {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}

// ACTIONS
export interface AuthPayload {
    token: string;
    email: string;
    error?: string;
}

export interface CollaboratorsPayload {
    page?: number;
    collabs: Collaborator[];
    error?: string;
}

export interface Action<T> {
    type: string;
    payload?: T;
}


// STATE
export interface Collaborator {
    id: number;
    name: string;
    lastName: string;
    avatar: string;
}

export interface AuthState {
    token: string;
    email: string;
    error: string;
    isLoading: boolean;
}

export interface CollaboratorsState {
    collabs: Collaborator[];
    collabsFiltered: Collaborator[];
    page: number;
    error: string;
    isLoading: boolean;
}

export interface AppState {
    auth: AuthState;
    collabs: CollaboratorsState;
}
