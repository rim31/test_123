import React from 'react'
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import LinkURL from '@material-ui/core/Link';
import { withStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import MySearch from './MySearch';


const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

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

export default function Layout(props: any) {
  return (
    <>
      <nav className="navbar sticky-top  navbar-dark navbar-expand-lg" style={{ backgroundColor: "#54a0ff", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">my e-Commerce</a>
          <button className="navbar-toggler navbar-toggler-right font-weight-bold bg-secondary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i className="fas fa-bars"></i></button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1 active"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px' }} to="/" >Home</Link></li>
              <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px' }} to="/jackets">jackets</Link></li>
              <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px' }} to="/shirts" >shirts</Link></li>
              <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px' }} to="/accessories" >accessories</Link></li>
            </ul>
          </div>
          <MySearch />
        </div>
      </nav>


      {props.children}
      <Box pt={4} style={{ bottom: 0, position: 'fixed', right: 0 }}>
        <Copyright />
      </Box>
    </ >
  )
}
