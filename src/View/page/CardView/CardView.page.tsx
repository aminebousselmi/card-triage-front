import React from 'react';

import { CardService } from '../../../Service/Card/CardService';
import { Card } from '../../../Model/Card'
import { MainGrid } from './CardView.s';
import { CardStatusEnum } from '../../../Model/CardStatusEnum';
import FilterCardComponent from '../../component/FilterCard/FilterCard.component';
import CardListPage from '../../component/CardList/CardList.component';
import ButtonContainerComponent from '../../component/ButtonContainer/ButtonContainer.component'
import Spinner from '../../component/Spinner/Spinner.component';

type Props = {}

type LocalState = {
  cards: Card[];
  toDoAndRejected: Card[];
  done: Card[];
  checked: Card[];
};

// Get not checked cards 
// We can make a utility class to ensure better reuse
function not(a: Card[], b: Card[]) {
  return a.filter(value => b.indexOf(value) === -1);
}

// Get cards intersection
// We can make a utility class to ensure better reuse
function intersection(a: Card[], b: Card[]) {
  return a.filter(value => b.indexOf(value) !== -1);
}

class CardViewPage extends React.Component<Props, LocalState> {

  constructor(props: Props) {
    super(props);
    // Initialize state data
    this.state = {
      done: [],
      toDoAndRejected: [],
      checked: [],
      cards: []
    };
  }

  // when component mount we sort data
  componentDidMount() {
    CardService.getCards().then((response: Array<Card>) => {
      this.sortData(response);
      this.setState({ cards: response })
    });
  }

  // Sort data into two arrays Todo + Rejected and Done
  sortData = (response: Array<Card>) => {
    response && response.forEach((card: Card) => {
      // Sorting by status
      if (card.status === CardStatusEnum.PENDING)
        this.setState({ toDoAndRejected: [card, ...this.state.toDoAndRejected] })
      else if (card.status === CardStatusEnum.REJECTED)
        this.setState({ toDoAndRejected: [...this.state.toDoAndRejected, card] })
      else {
        this.setState({ done: [...this.state.done, card] })
      }
    })
  }

  // handle checked cards
  handleToggle = (value: Card) => () => {
    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({ checked: newChecked })

  };

  // Move all the Todo and Rejected cards to the done list
  handleAllDone = () => {
    var cardUpdatedList: Card[] = [];
    this.state.toDoAndRejected.forEach((card: Card) => {
      card.status = CardStatusEnum.DONE
      cardUpdatedList.push(card);
    })
    this.setState({ done: this.state.done.concat(cardUpdatedList), toDoAndRejected: [] })
  };

  // Move all the Done cards to the Rejected list
  handleAllRejected = () => {
    var cardUpdatedList: Card[] = [];
    this.state.done.forEach((card: Card) => {
      card.status = CardStatusEnum.REJECTED
      cardUpdatedList.push(card);
    })
    this.setState({ toDoAndRejected: this.state.toDoAndRejected.concat(cardUpdatedList), done: [] })
  };

  // Move the Todo and Rejected cards to the done list
  handleDone = () => {
    const { checked, toDoAndRejected } = this.state;
    const leftChecked = intersection(checked, toDoAndRejected);

    leftChecked.forEach((card: Card) => {
      card.status = CardStatusEnum.DONE
    })

    this.setState({
      done: this.state.done.concat(leftChecked),
      toDoAndRejected: not(this.state.toDoAndRejected, leftChecked),
      checked: not(this.state.checked, leftChecked)
    })
  }

  // Move the Done cards to the Rejected list
  handleRejected = () => {
    const { checked, done } = this.state;
    const rightChecked = intersection(checked, done);

    rightChecked.forEach((card: Card) => {
      card.status = CardStatusEnum.REJECTED
    })

    this.setState({
      done: not(this.state.done, rightChecked),
      toDoAndRejected: this.state.toDoAndRejected.concat(rightChecked),
      checked: not(this.state.checked, rightChecked)
    })
  }

  // Filter data by patient name and arrhythmias
  filterData = (patientName: string, patientArrhyt: string) => {
    var resultToDoRejec: Array<Card> = this.state.toDoAndRejected;
    var resultDone: Array<Card> = this.state.done;

    // Filter data if patient name and arrhythmias are filled
    if(patientName.length !== 0 && patientArrhyt.length !== 0){
      resultToDoRejec = this.state.cards.filter((card: Card) =>
        card.patient_name.toLocaleLowerCase().includes(patientName.toLocaleLowerCase()) &&
        card.arrhythmias.includes(patientArrhyt) &&
        (card.status === CardStatusEnum.REJECTED || card.status === CardStatusEnum.PENDING)
      )
      resultDone = this.state.cards.filter((card: Card) =>
        card.patient_name.toLocaleLowerCase().includes(patientName.toLocaleLowerCase()) &&
        card.arrhythmias.includes(patientArrhyt) &&
        card.status === CardStatusEnum.DONE
      )
    // Filter data if only patient name is filled
    }else if(patientName.length !== 0){
      resultToDoRejec = this.state.cards.filter((card: Card) =>
        card.patient_name.toLocaleLowerCase().includes(patientName.toLocaleLowerCase()) &&
        (card.status === CardStatusEnum.REJECTED || card.status === CardStatusEnum.PENDING)
      )
      resultDone = this.state.cards.filter((card: Card) =>
        card.patient_name.toLocaleLowerCase().includes(patientName.toLocaleLowerCase()) &&
        card.status === CardStatusEnum.DONE
      )
    // Filter data if only arrhythmias is filled
    }else if(patientArrhyt.length !== 0){
      resultToDoRejec = this.state.cards.filter((card: Card) =>
        card.arrhythmias.includes(patientArrhyt) &&
        (card.status === CardStatusEnum.REJECTED || card.status === CardStatusEnum.PENDING)
      )
      resultDone = this.state.cards.filter((card: Card) =>
        card.arrhythmias.includes(patientArrhyt) &&
        card.status === CardStatusEnum.DONE
      )
    }

    this.setState({ toDoAndRejected: resultToDoRejec, done: resultDone });
  };

  render() {
    const { checked, toDoAndRejected, done, cards } = this.state;

    // Get leftChecked data
    const leftChecked = intersection(checked, toDoAndRejected);
    // Get rightChecked data
    const rightChecked = intersection(checked, done);

    // Get arrhythmias list and add them to Set
    var patientsArrhythmias: Set<string> = new Set();

    cards && cards.forEach((card: Card) => {
      card.arrhythmias.forEach((arrhythmia: string) => {
        patientsArrhythmias.add(arrhythmia)
      })

    })
    // We encapsulate view with spinner to ensure a better user experience
    return (
      <div data-testid="CardViewPage">
        <Spinner isLoading={!cards || cards.length === 0}>
          <FilterCardComponent
            patientsArrhythmias={Array.from(patientsArrhythmias)}
            filterData={this.filterData}
          />
          <MainGrid container spacing={2}>
            {/* Card List Left side */}
            <CardListPage
              cards={toDoAndRejected}
              checked={checked}
              handleToggle={this.handleToggle}
              size={4}
            />
            <ButtonContainerComponent
              size={4}
              handleDone={this.handleDone}
              handleRejected={this.handleRejected}
              handleAllDone={this.handleAllDone}
              handleAllRejected={this.handleAllRejected}
              isToDoAndRejected={toDoAndRejected.length === 0}
              isLeftChecked={leftChecked.length === 0}
              isRightChecked={rightChecked.length === 0}
              isDone={done.length === 0}
            />
            {/* Card List Right side */}
            <CardListPage
              cards={done}
              checked={checked}
              handleToggle={this.handleToggle}
              size={4}
            />
          </MainGrid>
        </Spinner>
      </div>
    );
  }

}

export default CardViewPage;
