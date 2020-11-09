import React from 'react';

import CardComponent from '../Card/Card.component';
import { Card } from '../../../Model/Card'
import { PaperUI } from './CardList.s';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

type Props = {
  cards: Card[];
  handleToggle: any;
  checked: Card[];
  size: any
}

// CardListComponent contains a list of cards in one single side
const CardListComponent: React.SFC<Props> = props => {

  const { cards, handleToggle, checked, size } = props;
  
  return (
    <Grid item xs={size}>
      <PaperUI>
        <List dense component="div" role="list">
          {cards.map((card: Card) => {
            const labelId = `transfer-list-item-${card}-label`;

            return (
              <ListItem key={card.id} role="listitem">
                <ListItemIcon>
                  <Checkbox
                    onClick={handleToggle(card)}
                    checked={checked.indexOf(card) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <CardComponent card={card} />
              </ListItem>
            );
          })}
          <ListItem />
        </List>
      </PaperUI>
    </Grid>
  );

}

export default CardListComponent;
