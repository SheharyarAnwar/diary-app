import { Diary } from "../../../Mirage/Interfaces/Diary.interface";

export interface DiaryState {
  diaries: Diary[];
  entryUpdated: boolean;
}
export interface CreateDiaryParams {
  userId: string;
  title: string;
  type: "public" | "private";
}
