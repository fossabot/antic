import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";

import axios from "../instance/axios";

const BookmarkCreate = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [success, setSuccess] = useState(false);

  const handleGetTitle = () => {
    axios.post("/url-title", { url }).then(({ data }) => {
      setTitle(data.title);
    });
  };

  const handleUrlSave = () => {
    axios.post("/bookmarks", { title, url }).then(() => {
      setSuccess(true);
    });
  };

  return (
    <Grid container spacing={1}>
      <Grid item container spacing={1} alignItems="center">
        <Grid item xs={12} md>
          <TextField
            label="网址"
            fullWidth
            variant="outlined"
            size="small"
            value={url}
            onChange={(e) => {
              setSuccess(false);
              setTitle("");
              setUrl(e.target.value);
            }}
          />
        </Grid>
        <Grid item md>
          <Button variant="contained" color="primary" onClick={handleGetTitle}>
            获取网站标题
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="标题"
          fullWidth
          size="small"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleUrlSave}>
          添加
        </Button>
        {success && (
          <span style={{ color: "green", marginLeft: 20, fontSize: "1rem" }}>
            添加成功
          </span>
        )}
      </Grid>
    </Grid>
  );
};

export default BookmarkCreate;
