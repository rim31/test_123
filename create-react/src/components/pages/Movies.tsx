import React from 'react'
import { StoreContainer } from '../Store';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { IMovie } from '../../utils';
import { Link } from 'react-router-dom'
// import Pagination from '@material-ui/lab/Pagination';
// import MyCard from '../pages/MyCard';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) =>
  createStyles({
    //   root: {
    //     '& > *': {
    //       marginTop: theme.spacing(2),
    //     },
    //     backgroundColor: "whitesmoke",
    //     paddingTop: 1,
    //     paddingBottom: 15,
    //     justifyContent: "center",
    //   },
    // }),
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    }
  })
);


export default function Movies() {
  const unstated = StoreContainer.useContainer();
  // const pageSize: number = 9;
  // const [totalPages, setTotalPages] = React.useState<number>(unstated.movies.length)
  // const [page, setPage] = React.useState<number>(1)
  const [product, setProduct] = React.useState<any[]>(unstated.movies)
  const [loading, setLoading] = React.useState<boolean>(unstated.loading)
  const classes = useStyles();

  React.useEffect(() => {
    console.log("allProducts : ", unstated.movies)
    // eslint-disable-next-line
  }, [])

  // React.useEffect(() => {
  //   setTotalPages(Math.ceil(product
  //     .filter((item: IMovie) => item.title.toLowerCase().includes(unstated.search.toLowerCase()))
  //     .length / pageSize));
  // }, [unstated.search, product])

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



      {/* Pagination */}
      {/* <div className={classes.root}>
        <div className="Pagination-header">
          <Pagination count={Math.ceil(totalPages / pageSize)} color="primary" shape="rounded"
            onChange={(e: object, page: number) => setPage(page)} />
        </div>
      </div> */}

      {loading && (<h1>Loading ...</h1>)}
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly" }}>

        {/* Articles - mapping - filter */}
        {/* {unstated.movies &&
          (product
            .filter((item: IMovie) => item.title.toLowerCase().includes(unstated.search.toLowerCase()))
            .slice((page - 1) * pageSize, page * pageSize).map((item: IMovie, i: number) =>
              <MyCard item={item} key={i + "__movie"} />
            ))
        } */}

        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList} cols={3}>
            {unstated.movies &&
              (product
                .filter((item: IMovie) => item.title.toLowerCase().includes(unstated.search.toLowerCase()))
                // .slice((page - 1) * pageSize, page * pageSize)
                .map((tile: IMovie, i: number) =>

                  <GridListTile key={i + "tile.title"}>
                    <Link
                      to={{
                        pathname: `/details/${tile.id}`
                      }}>

                      <img src={`https://image.tmdb.org/t/p/w500/${tile.poster_path}`} alt={tile.title} />
                      <GridListTileBar
                        title={tile.title}
                        // subtitle={<span>Rank: {tile.vote_average}</span>}
                        subtitle={<span>id: {tile.id}</span>}
                        actionIcon={
                          <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                            {/* <InfoIcon /> */}
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




/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */