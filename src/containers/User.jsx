import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import dayjs from "dayjs";
import md5 from "md5";
import * as React from "react";
import { useStore } from "react-redux";

import { gravatarCdn } from "../config/services";

const User = () => {
  const store = useStore();
  const state = store.getState();
  const avatar = `${gravatarCdn}/${md5(
    state.lab.userEmail
  )}.jpg?d=monsterid&s=300`;

  return (
    <Grid container spacing={2}>
      <Grid item>
        <div className="box">
          <Avatar
            alt={state.lab.user_name}
            src={avatar}
            style={{ width: 150, height: 150 }}
          />
        </div>
      </Grid>
      <Grid item>
        <Grid>ID：{state.lab.userId}</Grid>
        <Grid>昵称：{state.lab.userName}</Grid>
        <Grid>邮箱：{state.lab.userEmail}</Grid>
      </Grid>
      <Grid item xs={12}>
        <ul>
          <li>User-Agent：{navigator.userAgent}</li>
          <li>
            Token 到期时间：
            {dayjs
              .unix(localStorage.access_token_expired_at)
              .format("YYYY-MM-DD HH:mm:ss")}
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default User;
