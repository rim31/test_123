import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import LinkURL from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { StoreContainer } from '../Store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

/**
 * Footer
 */
function Copyright() {
  return (
    <WhiteTextTypography variant="body2" color="textSecondary" align="center" >
      {'Copyright © '}
      <LinkURL href="https://github.com/rim31">
        https://rim31.github.io/
      </LinkURL>{' '}
      {new Date().getFullYear()}
    </WhiteTextTypography>
  );
}

/**
 * Nav Bar - Layout
 * Search Bar included
 * @param props : child for layout
 */
export default function NavBar(props: any) {
  const classes = useStyles();
  const unstated = StoreContainer.useContainer();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px' }} to="/" >My eCommerce</Link></Typography>
            <Typography className={classes.title} variant="h6" noWrap><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px' }} to="/jackets">jackets</Link> </Typography>
            <Typography className={classes.title} variant="h6" noWrap><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px' }} to="/shirts" >shirts</Link> </Typography>
            <Typography className={classes.title} variant="h6" noWrap><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px' }} to="/accessories" >accessories</Link> </Typography>
            
            {/* Search Bar */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e: any) => unstated.setSearch(e.target.value) }
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      
      {/* Component */}
      {props.children}

      {/* Footer */}
      <Box pt={4} style={{ bottom: 0, position: 'fixed', right: 0 }}>
        <Copyright />
      </Box>
    </>
  );
}
