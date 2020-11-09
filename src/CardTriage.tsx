import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import CardViewPage from './View/page/CardView/CardView.page';
import MenuComponent from './View/component/Menu/Menu.component';

// Main class with routes config
class CardTriage extends React.Component {
    
  render() {
    return (
      <BrowserRouter>
        <MenuComponent/>
        <Switch>
          <Route exact path='/' component={CardViewPage} />
        </Switch>
        </BrowserRouter>
    );
  }
}

export default CardTriage;