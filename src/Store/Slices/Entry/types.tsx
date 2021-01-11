import { Entry } from "../../../Mirage/Interfaces/Entry.interface";

export interface EntryState {
  entries: Entry[];
}
export interface CreateEntryParams {
  title: string;
  content: string;
  diaryId: string;
}
