import { Action, Collaborator, CollaboratorsPayload } from '../types/types';
export enum CollabsActions {
    collabsListRequest = "[Collabs] collabs list request", 
    collabsListSuccess = "[Collabs] collabs list success", 
    collabsListFail = "[Collabs] collabs list fail", 
}

export const fetchCollabsRequest = (): Action<CollaboratorsPayload> => {
    return {
        type: CollabsActions.collabsListRequest,
    }
}

export const fetchCollabsSuccess = (collabs: Collaborator[], page: number): Action<CollaboratorsPayload> => {
    return {
        type: CollabsActions.collabsListSuccess,
        payload: {
            collabs,
            page
        }
    }
}

export const fetchCollabsFail = (error: string): Action<CollaboratorsPayload> => {
    return {
        type: CollabsActions.collabsListFail,
        payload: {
            error
        }
    }
}