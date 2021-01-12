import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import styles from "../styles";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Entry } from "../../../Mirage/Interfaces/Entry.interface";
import { useDispatch } from "react-redux";
import { selectEntry } from "../../../Store/Slices/User/userReducer";
import { triggerEntryUpdate } from "../../../Store/Slices/Diary/diaryReducer";
import http from "../../../axiosConfig";

interface EntryProps extends Entry {
  onClick: any;
  selected: boolean;
}
const Index: React.FC<EntryProps> = ({
  title,
  content,
  diaryId,
  id,
  onClick,
  selected,
  createdAt,
  updatedAt,
}) => {
  const dispatch = useDispatch();
  const classes = styles();
  const deleteEntryClicked = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    console.log("Yoi");
    http.delete(`/diaries/entry/${id}`).then((res) => {
      console.log(res);
      dispatch(triggerEntryUpdate());
    });
  };
  const clickedHandler = () => {
    onClick(id);
    dispatch(
      selectEntry({ content, diaryId, id, title, createdAt, updatedAt })
    );
  };

  return (
    <>
      <ListItem
        button
        className={classes.nested}
        selected={selected}
        onClick={clickedHandler}
      >
        <ListItemText primary={title} />
        <ListItemIcon onClick={deleteEntryClicked}>
          <DeleteOutlineIcon titleAccess="Delete Entry" />
        </ListItemIcon>
      </ListItem>
    </>
  );
};

export default Index;
