import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { StoreContainer } from './Store';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 245,
    marginTop: 15,
  },
  media: {
    height: 0,
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

interface IAvailability {
  "id": string,
  "DATAPAYLOAD": string, // "<AVAILABILITY>\n  <INSTOCKVALUE>INSTOCK</INSTOCKVALUE>\n</AVAILABILITY>"
}

export default function MyCard(props: any) {
  const unstated = StoreContainer.useContainer();
  const classes = useStyles();
  const [available, setAvailable] = React.useState<any| IAvailability>({id:"", DATAPAYLOAD:""});

  React.useEffect(() => {
    if (unstated.availabilities) {
      // let rest: any = Object.values(unstated.availabilities).findIndex((x: any) => x.id === props.item.id);
      let rest: any = (unstated.availabilities).includes((x: any) => x.id === props.item.id.toUpperCase());
      console.log(rest)
      setAvailable(unstated.availabilities[0]);
    }
    // eslint-disable-next-line
  }, [unstated.availabilities])


  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            OS
          </Avatar>
        }
        title={props.item.type}
        subheader={props.item.price + " €"}
      />
      <CardMedia
        className={classes.media}
        image="/shirt.jpg"
        title={props.item.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          color <span style={{ color: `${props.item?.color[0]}`, backgroundColor: `${props.item?.color[0]}`, border: '1px solid grey' }}>color</span>
        </Typography>
          <div style={{fontWeight:"bold", marginTop:"9px" }}>{props.item.name} </div> 
          <div style={{fontWeight:"lighter"}}>from : {props.item.manufacturer} </div> 
      </CardContent>
      <CardActions disableSpacing>
          <div style={{marginTop:"9px"}}>{available?.DATAPAYLOAD.includes("OUTOFSTOCK") ? "🔴 out of stock": "🟢  in stock"}</div> 
      </CardActions>
    </Card>
  );
}
