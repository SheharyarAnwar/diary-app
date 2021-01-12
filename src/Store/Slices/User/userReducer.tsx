import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import http from "../../../axiosConfig";
import { Entry } from "../../../Mirage/Interfaces/Entry.interface";
import { User } from "../../../Mirage/Interfaces/User.interface";

import { UserState, AuthenticatationParams } from "./types";

const initialState: UserState = {
  isAuthenticated: false,
  token: null,
  id: null,
  username: null,
  diaryIds: null,
  selectedEntry: null,
};
const authenticateUser = createAsyncThunk(
  "user/authenticateWithEmailAndPassword",
  async ({
    username,
    authenticationAction,
    password,
  }: AuthenticatationParams) => {
    const response = await http.post(`/${authenticationAction}`, {
      username,
      password,
    });

    return response.data as { token: string; user: User };
  }
);

const slice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    selectEntry: (state, action: PayloadAction<Entry>) => {
      state.selectedEntry = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      const {
        token,
        user: { diaryIds, username, id },
      } = action.payload;

      state.isAuthenticated = true;
      state.diaryIds = diaryIds;
      state.id = id;
      state.token = token;
      state.username = username;
    });
  },
});

const { selectEntry } = slice.actions;
export { authenticateUser, selectEntry };
export default slice.reducer;
