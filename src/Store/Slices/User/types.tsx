export interface UserState {
  isAuthenticated: boolean;
  token: string | null;
  id: string | null;
  username: string | null;
  diaryIds: string[] | null;
}
export interface AuthenticatationParams {
  username: string;
  password: string;
  authenticationAction: "login" | "signup";
}
