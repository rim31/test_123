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
      width: '100%',
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
  const { width } = props;
  let columns = width === 'xs' || width === 'sm' ? 1 : 3;
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
        <div>{unstated.movies.length} films</div>
      </div>

      {loading && (<h1>Loading ...</h1>)}
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly" }}>

        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList} cols={columns}>
            {unstated.movies &&
              (product
                .filter((item: IMovie) => item.title.toLowerCase().includes(unstated.search.toLowerCase()))
                .map((tile: IMovie, i: number) =>

                  <GridListTile key={i + "tile.title"}>
                    <Link
                      to={{
                        pathname: `/details/${tile.id}`
                      }}>

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