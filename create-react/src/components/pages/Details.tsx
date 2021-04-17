import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom'
import { red } from '@material-ui/core/colors';
import { StoreContainer } from '../Store';
import { IMovie, IFilm } from '../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    minWidth: '100%',
    backgroundColor: "black",
    color: "whitesmoke",
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

export default function Details(props: any) {
  const unstated = StoreContainer.useContainer();
  const classes = useStyles();
  const [item, setItem] = React.useState<IMovie | IFilm | any>("");
  const [loading, setLoading] = React.useState<boolean>(true)
  const { id } = props.match.params;

  // React.useEffect(() => {
  //   setItem(unstated.movies.filter((i) => String(i.id) === id)[0]);
  //   // eslint-disable-next-line 
  // }, [id, unstated.movies])

  React.useEffect(() => {
    if (unstated.film) {
      setItem(unstated.film);
      console.log(`unstated.movie`, unstated.film)
    }
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    try {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8cfaa9c2cd892c338c650dbcf1149226`)
        .then(response => response.json()).then((res) => setItem(res));
    } catch (err) {
      console.error(err.message);
    }
    setLoading(false);
    // eslint-disable-next-line
  }, [])

  return (
    <Card className={classes.root}>
      <div className="Pagination-header">
        <Link to={{ pathname: `/movies` }} style={{ textDecoration: 'none' }}>
          <h1>Movies</h1>
        </Link>
      </div>

      {loading && (<><h1>Loading</h1></>)}

      {item &&
        (
          <><CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                OS
            </Avatar>
            }
            title={item.title.substring(0, 20)}
            subheader={item.original_language}
          />

            <CardMedia
              className={classes.media}
              image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            />

            <CardContent>
              <div style={{ fontWeight: "bold", marginTop: "9px" }}>{item.title} </div>
              <div>popularity : {item.popularity} </div>
              <div>vote average : {item.vote_average} </div>
              <div>adult : {item.adult}</div>
              <div>genre ids : {item.genre_ids}</div>
              <div>id : {item.id}</div>
              <div>original language : {item.original_language}</div>
              <div>original title : {item.original_title}</div>
              <div>overview : {item.overview}</div>
              <div>popularity : {item.popularity}</div>
              <div>release date : {item.release_date}</div>
              <div>title : {item.title}</div>
              <div>video : {item.video}</div>
              <div>vote average : {item.vote_average}</div>
              <div>vote count : {item.vote_count}</div>
            </CardContent>
          </>)}

    </Card>
  );
}
