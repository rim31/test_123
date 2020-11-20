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
      justifyContent: "center",
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

export default function Accessories() {
  const unstated = StoreContainer.useContainer();
  const pageSize: number = 12;
  const [product, setProduct] = React.useState<IProduct[]>(unstated.accessories)
  const [totalPages, setTotalPages] = React.useState<number>(unstated.accessories.length)
  const [page, setPage] = React.useState<number>(1)
  const [loading, setLoading] = React.useState<boolean>(unstated.loading)
  const classes = useStyles();

  React.useEffect(() => {
    console.log("allProducts : ", unstated.allProducts)
    console.log("arrayAvailabilities : ", unstated.arrayAvailabilities)
    console.log("arrayManufacturers : ", unstated.arrayManufacturers)
    console.log("availabilities : ", unstated.availabilities)
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    setTotalPages(Math.ceil(product
      .filter((item: IProduct) => item.name.toLowerCase().includes(unstated.search.toLowerCase()))
      .length / pageSize));
  }, [unstated.search, product])

  React.useEffect(() => {
    setLoading(true);
    if (unstated.accessories !== product) {
      setProduct(unstated.accessories);
    }
    setLoading(false);
    unstated.setLoading(false);
    // eslint-disable-next-line
  }, [unstated.accessories, product])


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Accessories</h1>
      <div className={classes.root}
      >
        <div style={{ justifyContent: "center" }}>
          <Pagination count={Math.ceil(totalPages / pageSize)} color="primary" shape="rounded"
            onChange={(e: object, page: number) => setPage(page)}
          />
        </div>
      </div>

      {loading && (<h1>Loading ...</h1>)}
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        
        {unstated.accessories &&
          (product
            .filter((item: IProduct) => item.name.toLowerCase().includes(unstated.search.toLowerCase()))
            .slice((page - 1) * pageSize, page * pageSize).map((item: IProduct, i: number) =>
              <MyCard item={item} key={item.id} name="accessories"/>
            ))
        }
      </div>
    </div>
  )
}

