import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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

// interface IAvailability {
//   "id": string,
//   "DATAPAYLOAD": string, // "<AVAILABILITY>\n  <INSTOCKVALUE>INSTOCK</INSTOCKVALUE>\n</AVAILABILITY>"
// }

export default function MyCard(props: any) {
  const unstated = StoreContainer.useContainer();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [available, setAvailable] = React.useState<any>("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  React.useEffect(() => {
    // unstated.getAvailability(props.item.manufacturer)
    // if (unstated.availability)
    //   console.log("==> :", unstated.availability)
    // // console.log("==> :", props.item.id)
    // // console.log("shirts ==> :", unstated.shirts)
    // // console.log("jackets ==> :", unstated.jackets)
    // // console.log("accessories ==> :", unstated.accessories)
    // console.log("allProducts ==> :", (unstated.accessories).map((i: any) => i.manufacturer))
    // console.log("ArrayAvailabilities ==> :", unstated.arrayAvailabilities)
    // let test: string[] = ((unstated.accessories).map((i: any) => i.manufacturer)).filter((x, i, a) => a.indexOf(x) === i);
    // console.log("arrayManufacturers -==> :", test);
    // console.log("arrayManufacturers -==>", unstated.getAvailabilities(test));
    // console.log("availabilities==>", unstated.availabilities);
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    if (unstated.availabilities) {
      let rest: any = Object.values(unstated.availabilities).findIndex((x: any) => x.id === props.item.id);
      setAvailable(rest);
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
          <span>{props.item.name}</span>
          color <span style={{ color: `${props.item?.color[0]}`, backgroundColor: `${props.item?.color[0]}`, border: '1px solid grey' }}>color</span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>From :</Typography>
          <Typography paragraph>
            {props.item.manufacturer}
          </Typography>
          <Typography paragraph
            onClick={() => {
              // console.log(unstated.availabilities(props.item.manufacturer, props.item.id));
              unstated.getAvailability(props.item.manufacturer);
              console.log("available", available)
            }}
          >
            LOL 🤗  {available?.DATAPAYLOAD}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
// {console.log(unstated.getAvailabilityByItem(props.item.manufacter, props.item.id))}