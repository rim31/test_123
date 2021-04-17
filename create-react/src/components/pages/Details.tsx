import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
// import CardActions from '@material-ui/core/CardActions';
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

export default function Details(props: any) {
  const unstated = StoreContainer.useContainer();
  const classes = useStyles();
  const [item, setItem] = React.useState<IMovie | any>("");
  const { id } = props.match.params;

  React.useEffect(() => {
    setItem(unstated.movies.filter(i => String(i.id) === id));
    console.log(`item`, item, unstated.movies, id, typeof (id), unstated.movies.filter(i => i.id === id))
    // eslint-disable-next-line 
    unstated.movies.map(i => {
      console.log(`i.id`, i.id)
      if (String(i.id) === id) {
        console.log(`===> i`, i)
        setItem(i);
      }
    })
    // eslint-disable-next-line 
  }, [id, unstated.movies])
  return (
    <Card className={classes.root}>

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
              <div style={{ fontWeight: "lighter" }}>popularity : {item.popularity} </div>
              <div style={{ fontWeight: "lighter" }}>vote : {item.vote_average} </div>
            </CardContent>
          </>)}

    </Card>
  );
}
