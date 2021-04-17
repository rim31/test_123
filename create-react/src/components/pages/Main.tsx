import React from 'react'
import { StoreContainer } from '../Store';
import MyCard from './MyCard';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { IMovie } from '../../utils'
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
      backgroundColor: "whitesmoke",
      paddingTop: 1,
      paddingBottom: 15,
      justifyContent: "center",
    },
  }),
);

/**
 * Display All products - not in the subject - NOT USED
 */
export default function Main() {
  const unstated = StoreContainer.useContainer();
  const pageSize: number = 12;
  const [product, setProduct] = React.useState<IMovie[]>(unstated.movies)
  const [totalPages, setTotalPages] = React.useState<number>(unstated.movies.length)
  const [page, setPage] = React.useState<number>(1)
  const [loading, setLoading] = React.useState<boolean>(unstated.loading)
  const classes = useStyles();

  /**
   * Loading data from API
   */
  React.useEffect(() => {
    console.log("allProducts : ", unstated.movies)
    // eslint-disable-next-line
  }, [])

  /**
   * Pagination
   */
  React.useEffect(() => {
    setTotalPages(Math.ceil(product
      .filter((item: IMovie) => item.title.toLowerCase().includes(unstated.search.toLowerCase()))
      .length / pageSize));
  }, [unstated.search, product])

  /**
   * refresh data from store is 
   */
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
      <h1 style={{ textAlign: "center" }}>All Products</h1>

      {/* Pagination */}
      <div className={classes.root}>
        <div style={{ justifyContent: "center" }}>
          <Pagination count={Math.ceil(totalPages / pageSize)} color="primary" shape="rounded"
            onChange={(e: object, page: number) => setPage(page)}
          />
        </div>
      </div>

      {loading && (<h1>Loading ...</h1>)}
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        {/* Clothes - articles */}
        {unstated.movies &&
          (product
            .filter((item: IMovie) => item.title.toLowerCase().includes(unstated.search.toLowerCase()))
            .slice((page - 1) * pageSize, page * pageSize).map((item: IMovie, i: number) =>
              <MyCard item={item} key={i + "_movie"} />
            ))
        }
      </div>
    </div>
  )
}

