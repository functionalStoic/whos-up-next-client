import React, { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles({
  root: { flexGrow: 1 },
  grow: { flexGrow: 1 },
  menuButton: { marginLeft: -12, marginRight: 20 },
  menuItem: { textDecoration: 'none', color: 'inherit' },
  logo: { textDecoration: 'none', color: 'inherit' }
});

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: MouseEvent) =>
    setAnchorEl(event.currentTarget as HTMLElement);
  const handleClose = () => setAnchorEl(null);

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#282c34' }}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Link className={classes.logo} to="/">
              Who's Up Next
            </Link>
          </Typography>

          <div>
            <IconButton
              aria-owns={anchorEl ? 'menu-appbar' : 'null'}
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem className={classes.menuItem} onClick={handleClose}>
                <Link className={classes.menuItem} to="/account/">
                  Account
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className={classes.menuItem} to="/events/">
                  Events
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className={classes.menuItem} to="/people/">
                  People
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
