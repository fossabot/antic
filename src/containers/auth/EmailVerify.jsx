import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { loginAction } from "actions";
import axios from "instance/axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

const Forget = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSuccess, setIsSuccess] = useState(false);

  const secret = searchParams.get("secret");

  useEffect(() => {
    if (secret) {
      axios.post("/emailVerify", { secret }).then((response) => {
        setIsSuccess(true);
      });
    }
  }, [navigate, secret]);

  const handleAutoLogin = () => {
    axios
      .post("/autoLogin", {
        secret: match.params.secret,
      })
      .then((response) => {
        dispatch(loginAction(response.data));
        navigate("/");
      });
  };

  const handleManualLogin = () => {
    navigate("/login");
  };

  return (
    <Container component="main" maxWidth="xs">
      {isSuccess ? (
        <>
          <h2 style={{ color: "green", textAlign: "center" }}>邮箱验证成功</h2>
          <Grid container spacing={2} justify="space-around">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAutoLogin}
              >
                自动登录
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleManualLogin}
              >
                手动登录
              </Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <h2 style={{ color: "red", textAlign: "center" }}>邮箱验证失败</h2>
      )}
    </Container>
  );
};

export default Forget;
