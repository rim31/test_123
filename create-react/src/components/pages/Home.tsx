import React from 'react'
import { StoreContainer } from '../Store';
// import Main from './Main';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 245,
    marginTop: 15,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function Home() {
  const unstated = StoreContainer.useContainer();
  const classes = useStyles();

  React.useEffect(() => {
    console.log("loading : ", unstated.loading)
    // eslint-disable-next-line 
  }, [])

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>WELCOME</h1>
      
      <div className="jumbotron">
        <div className="myContainer">
          <h1>Jumbotron</h1>
        </div>
      </div>

      {unstated.loading && (<h1>Loading ...</h1>)}
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly" }}>

        <Link to='/jackets'>
          <Card className={classes.root}>
            <CardMedia className={classes.media} image={`./jackets.jpg`} title="jackets" />
            <CardContent>
              <div style={{ fontWeight: "bold", textAlign: "center" }}>Jackets </div>
            </CardContent>
          </Card>
        </Link>
        <Link to='/shirts'>
          <Card className={classes.root}>
            <CardMedia className={classes.media} image={`./shirts.jpg`} title="shirts" />
            <CardContent>
              <div style={{ fontWeight: "bold", textAlign: "center" }}>Shirts </div>
            </CardContent>
          </Card>
        </Link>
        <Link to='/accessories'>
          <Card className={classes.root}>
            <CardMedia className={classes.media} image={`./accessories.jpg`} title="accessories" />
            <CardContent>
              <div style={{ fontWeight: "bold", textAlign: "center" }}>Accessories </div>
            </CardContent>
          </Card>
        </Link>

      </div>
    </div>
  )
}
