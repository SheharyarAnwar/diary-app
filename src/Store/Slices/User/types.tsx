import { Entry } from "../../../Mirage/Interfaces/Entry.interface";

export interface UserState {
  isAuthenticated: boolean;
  token: string | null;
  id: string | null;
  username: string | null;
  diaryIds: string[] | null;
  selectedEntry: null | Entry;
}
export interface AuthenticatationParams {
  username: string;
  password: string;
  authenticationAction: "login" | "signup";
}
