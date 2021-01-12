import { Box, Typography, TextField, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./../../Store/index";
import http from "../../axiosConfig";
import { toast } from "react-toastify";
import { triggerEntryUpdate } from "../../Store/Slices/Diary/diaryReducer";
const Index: React.FC = () => {
  const classes = styles();
  const selectedEntry = useSelector(
    (state: RootState) => state.userReducer.selectedEntry
  );
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const entryUpdateHandler = () => {
    http
      .put(`/diaries/entry/${selectedEntry?.id}`, { title, content })
      .then((res) => {
        // dispatch Update Get Entries
        console.log(res);
        dispatch(triggerEntryUpdate());
        toast("Saved Changes");
      });
  };

  useEffect(() => {
    setTitle(selectedEntry?.title as string);
    setContent(selectedEntry?.content as string);
  }, [selectedEntry]);
  return (
    <>
      {selectedEntry ? (
        <Box className={classes.root}>
          <Box className={classes.right}>
            <Box className={classes.title}>
              <Typography variant="h5">Title</Typography>
              <TextField
                variant={"outlined"}
                fullWidth
                size={"medium"}
                multiline={true}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              ></TextField>
            </Box>
          </Box>
          <Box className={classes.right}>
            <Box className={classes.content}>
              <Typography variant="h5">Content</Typography>
              <TextField
                variant={"outlined"}
                size={"medium"}
                fullWidth
                multiline={true}
                onChange={(e) => setContent(e.target.value)}
                value={content}
              ></TextField>
            </Box>
          </Box>
          <Button variant="contained" onClick={entryUpdateHandler}>
            Save Changes
          </Button>
        </Box>
      ) : (
        <Typography className={classes.right}>
          1-Press Add Icon To create A diary
          <br></br>
          2-Press Add Icon In The Diary To Create An Entry
          <br></br>
          3-Select An Entry To Display it's contents
        </Typography>
      )}
    </>
  );
};

export default Index;
