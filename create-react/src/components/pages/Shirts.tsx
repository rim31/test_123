import React from 'react'
import { StoreContainer } from '../Store';
import MyCard from '../MyCard';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
      backgroundColor: "whitesmoke",
      paddingTop: 1,
      paddingBottom: 15,
      margin: "auto",
    },
  }),
);

interface IProduct {
  "id": string,
  "type": string,
  "name": string,
  "color": string[],
  "price": number,
  "manufacturer": string
}

export default function Shirt() {
  const unstated = StoreContainer.useContainer();
  const pageSize: number = 12;
  const [product, setProduct] = React.useState<IProduct[]>(unstated.shirts)
  const [totalPages, setTotalPages] = React.useState<number>(unstated.shirts.length)
  const [page, setPage] = React.useState<number>(1)
  const [loading, setLoading] = React.useState<boolean>(unstated.loading)
  const classes = useStyles();

  React.useEffect(() => {
    setTotalPages(Math.ceil(product
      .filter((item: IProduct) => item.name.toLowerCase().includes(unstated.search.toLowerCase()))
      .length / pageSize));
  }, [unstated.search, product])

  React.useEffect(() => {
    setLoading(true);
    if (unstated.shirts !== product) {
      setProduct(unstated.shirts);
    }
    setLoading(false);
    unstated.setLoading(false);
    // eslint-disable-next-line
  }, [unstated.shirts, product])

  return (
    <div>
      <h1>Shirt</h1>
      <div className={classes.root}>
        <Pagination count={Math.ceil(totalPages / pageSize)} color="primary" shape="rounded"
          onChange={(e: object, page: number) => setPage(page)}
        />
      </div>
      {loading && (<h1>Loading ...</h1>)}
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        {unstated.shirts &&
          // (product.map((item: IProduct, i: number) =>
          (product
            .filter((item: IProduct) => item.name.toLowerCase().includes(unstated.search.toLowerCase()))
            .slice((page - 1) * pageSize, page * pageSize).map((item: IProduct, i: number) =>
              <MyCard item={item} key={item.id} />
            ))
        }
      </div>
    </div>
  )
}

