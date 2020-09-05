import "moment/locale/zh-cn";
import "typeface-roboto";
import "../styles/App.scss";
import "../styles/App.css";

import MomentUtils from "@date-io/moment";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "../routes";
import ScrollToTop from "./ScrollToTop";

require("../bootstrap");

moment.locale("zh-cn");

const App = ({ themePaletteType }) => {
  const theme = createMuiTheme({
    palette: {
      type: themePaletteType,
    },
  });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <MuiPickersUtilsProvider
        utils={MomentUtils}
        libInstance={moment}
        locale="zh-cn"
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </BrowserRouter>
  );
};

export default App;
