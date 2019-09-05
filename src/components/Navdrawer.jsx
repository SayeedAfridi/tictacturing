import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import{Drawer, Divider} from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {PlayArrow, Person} from '@material-ui/icons/'
import {Link} from 'react-router-dom'
import Topbar from './Appbar'

const useStyles = makeStyles({
  list: {
    width: 250,
    textDecoration: 'none',
  },
  menulist: {
    marginTop: 10
  },
  link: {
    textDecoration: 'none',
    color: '#616161',
    fontWeight: 'bold'
  },
  typo: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
  }
})

export default function NavDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >   
        LOgin
        <Divider />
        <List className={classes.menulist}>
            <Link to='/' className={classes.link}>
                <ListItem button key='1'>
                    <ListItemIcon><PlayArrow style={{color: '#2e7d32'}}/></ListItemIcon>
                    <ListItemText >Play</ListItemText>
                </ListItem>
            </Link>
            <Link to='/profile' className={classes.link}>
                <ListItem button key='1'>
                    <ListItemIcon><Person style={{color: '#e040fb'}}/></ListItemIcon>
                    <ListItemText >Profile</ListItemText>
                </ListItem>
            </Link>
        </List>
    </div>
  )

  return (
    <div>
      <Topbar toggle={toggleDrawer}/>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  )
}
