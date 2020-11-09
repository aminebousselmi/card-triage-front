import React from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import clsx from 'clsx';

import { AvatarUI, CardUI, ChipUI } from './Card.s'
import { Card } from '../../../Model/Card';


type Props = {
  card: Card
};

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const dateToFormat = (date: Date) => {
  var dateSplitted = date.toString().split('T')
  return dateSplitted[0] + ' ' + dateSplitted[1]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    expand: {
      transform: 'rotate(180degdeg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
  }),
);

// CardComponent contain a card informations for a single patient
const CardComponent: React.SFC<Props> = props => {
  
  const { card } = props;

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardUI>
      <CardHeader
        avatar={
          <AvatarUI aria-label="recipe">
            {card.patient_name.charAt(0)}
          </AvatarUI>
        }
        title={card.patient_name}
        subheader={dateToFormat(card.created_date)}
      />
      <CardContent>
        <Alert severity="info">{card.status}</Alert>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Arrhythmias" placement="top">
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
        </Tooltip>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography component={'span'}>
            {card.arrhythmias.map((arrhythmia: string) => {
              return (
                <ChipUI
                  key={arrhythmia}
                  label={arrhythmia}
                  color="primary"
                  variant="outlined"
                />
              )
            })}
          </Typography>
        </CardContent>
      </Collapse>
    </CardUI>
  );
};

export default CardComponent;
