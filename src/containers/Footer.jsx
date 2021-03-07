import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { Link as RouteLink } from "react-router-dom";

import HomeFooter from "../components/HomeFooter";
import backgroundImg from "../config/footerBackground";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundImage:
      theme.palette.type === "dark"
        ? `url(${process.env.REACT_APP_CDN_URL}/bg/tesla-vector-roadster.png!/compress/true/fw/400)`
        : `url(${process.env.REACT_APP_CDN_URL}/bg/${
            backgroundImg[Math.floor(Math.random() * backgroundImg.length)]
          }!/compress/true/fw/400)`,
    backgroundPosition: "right top",
    backgroundRepeat: "no-repeat",
    backgroundSize: 200,
    minHeight: 200,
    paddingTop: "2rem",
    marginTop: "2rem",
    borderTop: "1px solid rgba(211,224,233,.15)",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Container component="footer" className={classes.footer}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm>
          <Typography variant="h5" component="h3">
            Powered by
          </Typography>
          <ul>
            <li>
              <a
                href="https://zh-hans.reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
            </li>
            <li>
              <a
                href="https://material-ui.com/zh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Material-UI
              </a>
            </li>
            <li>
              <a
                href=" https://laravel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Laravel
              </a>
            </li>
            <li>
              <RouteLink to="/powered-by">More?</RouteLink>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm>
          <Typography variant="h5" component="h3">
            长期计划
          </Typography>
          <ul>
            <li>健康</li>
            <li>PHP + JavaScript</li>
            <li>TDD、算法和底层等</li>
            <li>英语</li>
            <li>实时的应用、游戏</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm>
          <Typography variant="h5" component="h3">
            常用网址
          </Typography>
          <ul>
            <li>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                谷歌搜素
              </a>
            </li>
            <li>
              <a
                href="https://translate.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                谷歌翻译
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
      <HomeFooter />
    </Container>
  );
};

export default Footer;
