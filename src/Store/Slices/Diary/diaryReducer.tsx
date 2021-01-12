import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../../axiosConfig";
import { Diary } from "./../../../Mirage/Interfaces/Diary.interface";
import { CreateDiaryParams, DiaryState } from "./types";

const initialState: DiaryState = {
  diaries: [],
  entryUpdated: false,
};
const createDiary = createAsyncThunk(
  "user/createDiary",
  async ({ userId, title, type }: CreateDiaryParams) => {
    const response = await http.post(`/diaries`, { userId, title, type });
    return response.data.diary as Diary;
  }
);

const getDiariesByUserId = createAsyncThunk(
  "user/getDiariesByUserId",
  async (userId: string) => {
    const response = await http.get(`/diaries/${userId}`);
    return response.data.diaries as Diary[];
  }
);

const slice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    triggerEntryUpdate: (state) => {
      state.entryUpdated = !state.entryUpdated;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDiariesByUserId.fulfilled, (state, action) => {
      state.diaries = action.payload;
    });
    builder.addCase(createDiary.fulfilled, (state, action) => {
      state.diaries.push(action.payload);
    });
  },
});

const { triggerEntryUpdate } = slice.actions;
export { triggerEntryUpdate, createDiary, getDiariesByUserId };
export default slice.reducer;
