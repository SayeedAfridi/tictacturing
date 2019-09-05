import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import{AppBar, Toolbar, Typography, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    typo: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
})

export default function Topbar(props) {
    const classes = useStyles();
    
    return (
      <div>
        <AppBar position='static' style={{background: '#e040fb', marginBottom:20}}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={props.toggle('left', true)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.typo} noWrap>
                    TicTacTuring
                </Typography>
            </Toolbar>
        </AppBar>
      </div>
    );
  }




