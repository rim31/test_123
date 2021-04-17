import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { StoreContainer } from '../Store';
import { IMovie } from '../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 245,
    marginTop: 15,
  },
  media: {
    height: 0,
    // maxHeight: '138px',
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
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MyCard(props: { item: IMovie }) {
  const unstated = StoreContainer.useContainer();
  const classes = useStyles();


  React.useEffect(() => {
    console.log(`unstated.movies`, unstated.movies);
    // eslint-disable-next-line 
  }, [])
  return (
    <Card className={classes.root}>

      {/* Title of the card */}
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            OS
          </Avatar>
        }
        title={props.item.title.substring(0, 20)}
        subheader={props.item.original_language}
      />

      {/* Image */}
      <CardMedia
        className={classes.media}
        image={`https://image.tmdb.org/t/p/w500/${props.item.poster_path}`}
      />

      {/* content : products */}
      <CardContent>
        <div style={{ fontWeight: "bold", marginTop: "9px" }}>{props.item.title} </div>
        <div style={{ fontWeight: "lighter" }}>popularity : {props.item.popularity} </div>
        <div style={{ fontWeight: "lighter" }}>vote : {props.item.vote_average} </div>
      </CardContent>

    </Card>
  );
}
