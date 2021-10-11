import {
  Action,
  CollaboratorsPayload,
  CollaboratorsState,
} from "../types/types";
import { CollabsActions } from "./collabsActions";

const collabsReducer = (
  state: CollaboratorsState,
  action: Action<CollaboratorsPayload>
): CollaboratorsState => {
  switch (action.type) {
    case CollabsActions.collabsListRequest:
      return {
        ...state,
        isLoading: true,
      };
    case CollabsActions.collabsListSuccess:
      return {
        ...state,
        collabs: action.payload?.collabs!,
        isLoading: false,
        error: "",
        page: action.payload?.page!,
      };
    case CollabsActions.collabsListFail:
      return {
        ...state,
        collabs: [],
        collabsFiltered: [],
        error: action.payload?.error!,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default collabsReducer;
