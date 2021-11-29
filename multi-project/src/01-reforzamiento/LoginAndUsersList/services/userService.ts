import {
  Collaborator,
  Response,
  CollaboratorsPayload,
  CollabsResponse,
} from "../types/types";

class UserService {
  private baseUrl: string = process.env.REACT_APP_REQRES_BASE_URL || "";

  async fetchAllCollabs(): Promise<Response<CollaboratorsPayload>> {
    try {
      const response = await fetch(`${this.baseUrl}/users`);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const parsedResponse = (await response.json()) as CollabsResponse;
      return {
        data: {
          collabs: parsedResponse.data.map((collab) => ({
            id: collab.id,
            name: collab.first_name,
            lastName: collab.last_name,
            avatar: collab.avatar,
          })),
          page: parsedResponse.page,
        },
        errorMessage: "",
      };
    } catch (err) {
      return { data: {}, errorMessage: "" };
    }
  }
}

export default UserService;
