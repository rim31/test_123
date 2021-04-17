import React from 'react'
import { StoreContainer } from '../Store';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { IMovie } from '../../utils';
import MyCard from '../pages/MyCard';

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


export default function Movies() {
  const unstated = StoreContainer.useContainer();
  const pageSize: number = 12;
  const [product, setProduct] = React.useState<any[]>(unstated.movies)
  const [totalPages, setTotalPages] = React.useState<number>(unstated.movies.length)
  const [page, setPage] = React.useState<number>(1)
  const [loading, setLoading] = React.useState<boolean>(unstated.loading)
  const classes = useStyles();

  React.useEffect(() => {
    console.log("allProducts : ", unstated.movies)
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    setTotalPages(Math.ceil(product
      .filter((item: IMovie) => item.title.toLowerCase().includes(unstated.search.toLowerCase()))
      .length / pageSize));
  }, [unstated.search, product])

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
      <div className={classes.root}>
        <div className="Pagination-header">
          <Pagination count={Math.ceil(totalPages / pageSize)} color="primary" shape="rounded"
            onChange={(e: object, page: number) => setPage(page)} />
        </div>
      </div>

      {loading && (<h1>Loading ...</h1>)}
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly" }}>

        {/* Articles - mapping - filter */}
        {unstated.movies &&
          (product
            .filter((item: IMovie) => item.title.toLowerCase().includes(unstated.search.toLowerCase()))
            .slice((page - 1) * pageSize, page * pageSize).map((item: IMovie, i: number) =>
              <MyCard item={item} key={i + "__movie"} />
            ))
        }
      </div>
    </div>
  )
}

