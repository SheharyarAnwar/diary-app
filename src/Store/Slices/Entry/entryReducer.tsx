import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../../axiosConfig";
import { Entry } from "../../../Mirage/Interfaces/Entry.interface";
import { CreateEntryParams, EntryState } from "./types";

const initialState: EntryState = {
  entries: [],
};
const createEntry = createAsyncThunk(
  "entry/createEntry",
  async ({ content, title, diaryId }: CreateEntryParams) => {
    const response = await http.post(`/diaries/entry/${diaryId}`, {
      title,
      content,
    });
    return response.data.entry as Entry;
  }
);

const getEntriesByDiaryId = createAsyncThunk(
  "entry/getEntriesByDiaryId",
  async (diaryId: string) => {
    const response = await http.get(`/diaries/entries/${diaryId}`);
    return response.data.entries as Entry[];
  }
);

const slice = createSlice({
  name: "entry",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEntriesByDiaryId.fulfilled, (state, action) => {
      state.entries = action.payload;
    });
    builder.addCase(createEntry.fulfilled, (state, action) => {
      state.entries.push(action.payload);
    });
  },
});

const {} = slice.actions;
export { getEntriesByDiaryId, createEntry };
export default slice.reducer;
