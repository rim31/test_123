import React from 'react'
import { StoreContainer } from '../Store';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { IMovie } from '../../utils';
import { Link } from 'react-router-dom'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 'auto',
      height: '100%',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    }
  })
);


export default function Movies(props: any) {
  const unstated = StoreContainer.useContainer();
  const [product, setProduct] = React.useState<any[]>(unstated.movies)
  const [loading, setLoading] = React.useState<boolean>(unstated.loading)
  const [width, setWidth] = React.useState<number>(window.innerWidth);

  // To determine if the browser width for responsive
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }
  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  // to use in  GridList 
  let isMobile: boolean = (width <= 768);

  const classes = useStyles();

  // update if necessary
  React.useEffect(() => {
    setLoading(true);
    if (unstated.movies !== product) {
      setProduct(unstated.movies);
    }
    setLoading(false);
    unstated.setLoading(false);
    // eslint-disable-next-line
  }, [unstated.movies, product])


  return (
    <div>

      {/* Header */}
      <div className="Pagination-header">
        <h1>Movies</h1>
        {/* number of movies */}
        <div>{unstated.movies.length} films</div>
      </div>

      {/* Loading */}
      {loading && (<h1>Loading ...</h1>)}
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly" }}>

        <div className={classes.root}>
          {/* grid of movies */}
          <GridList cellHeight={180} className={classes.gridList} cols={isMobile ? 1 : 3}>
            {unstated.movies &&
              (product
                .filter((item: IMovie) => item.title.toLowerCase().includes(unstated.search.toLowerCase()))
                .map((tile: IMovie, i: number) =>

                  // card of movie
                  <GridListTile key={i + "tile.title"}>

                    {/* redireect to Details Component */}
                    <Link to={{ pathname: `/details/${tile.id}` }}>

                      <img src={`https://image.tmdb.org/t/p/w500/${tile.poster_path}`} alt={tile.title} />
                      <GridListTileBar
                        title={tile.title}
                        subtitle={<span>id: {tile.id}</span>}
                        actionIcon={
                          <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                          </IconButton>
                        }
                      />
                    </Link>
                  </GridListTile>
                ))}
          </GridList>
        </div>

      </div>
    </div>
  )
}