import { Diary } from "../../../Mirage/Interfaces/Diary.interface";

export interface DiaryState {
  diaries: Diary[];
}
export interface CreateDiaryParams {
  userId: string;
  title: string;
  type: "public" | "private";
}
