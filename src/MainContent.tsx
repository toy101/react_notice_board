import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { For } from 'react-loops';

import {
  Badge,
  CircularProgress,
  Paper,
  Button,
  Fab,
  Grid
} from '@material-ui/core';

// Material-UIアイコン取得
import MailIcon from '@material-ui/icons/Mail';
import ShareIcon from '@material-ui/icons/Share';
import ListAlt from '@material-ui/icons/ListAlt';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Lock from '@material-ui/icons/Lock';
import Chat from '@material-ui/icons/Chat';
import Assessment from '@material-ui/icons/Assessment';
import CloudUpload from '@material-ui/icons/CloudUpload';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';

// スタイルを適用する
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '10px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      '& > *': {
        margin: theme.spacing(3),
      },
    },
  }),
);

function List() {

    const itemList = ['a', 'b', 'c']
  
    return (
      <ul>
        <For of={itemList}>{item => <li>{item}</li>}</For>
      </ul>
    )
  }

function MainContent() {

  // CSSを適用する。
  const classes = useStyles();

  return (
        <Grid container className={classes.root} spacing={3}>
          <Grid item xs={12} justify="center" >
            <Paper variant="outlined" elevation={3} className={classes.paper}>
              <Button variant="contained">Default</Button>
              <Button variant="contained" color="primary">
                Primary
                </Button>
              <Button variant="contained" color="secondary">
                Secondary
                </Button>
              <Button variant="contained" disabled>
                Disabled
                </Button>
              <Button variant="contained" color="primary" href="#contained-buttons">
                Link
                </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} justify="center" >
            <Paper variant="outlined" elevation={3} className={classes.paper}>
                <h3><List /></h3>
            </Paper>
          </Grid>
        </Grid>
  );
}

export default MainContent;