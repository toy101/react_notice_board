import React from "react";
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

// 独自に作成したコンポーネントのインポート
import MainContent from "./MainContent";
import MyAppBar from "./MyAppBar";

// 独自のテーマを作成する
const theme = createMuiTheme({
  palette: {
    type:'dark',
    primary: {
      main: '#FF5F51',
    },
    secondary: {
      main: '#15B35B',
    },
  },
  typography: {
    fontFamily: [
      'Noto Sans',
      'sans-serif',
    ].join(','),
    fontSize: 12,
    h1: {
      fontSize: "1.75rem"
    },
    h2: {
      fontSize: "1.5rem"
    },
    h3: {
      fontSize: "1.25rem"
    },
    h4: {
      fontSize: "1.125rem"
    },
    h5: {
      fontSize: "1rem"
    },
    h6: {
      fontSize: "1rem"
    },
  }
});

function App() {

  return (
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <MyAppBar />
        <MainContent />
    </MuiThemeProvider >
  );
}

export default App;