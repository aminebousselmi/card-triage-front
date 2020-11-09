import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { ButtonContainer } from './ButtonContainer.s'

type Props = {
  size: any,
  handleAllDone: any,
  handleAllRejected: any,
  handleDone: any,
  handleRejected: any,
  isToDoAndRejected: boolean
  isLeftChecked: boolean,
  isRightChecked: boolean,
  isDone: boolean
};

// ButtonContainerComponent contains the buttons to handle data from left to right side and vice-versa
const ButtonContainerComponent: React.SFC<Props> = props => {

  const { 
    size, 
    handleAllDone, 
    handleAllRejected, 
    handleDone, 
    handleRejected, 
    isToDoAndRejected, 
    isLeftChecked,
    isRightChecked,
    isDone
  } = props
  
  return (
    <ButtonContainer item xs={size}>
      <Grid container direction="column" alignItems="center">
        <Button
          variant="outlined"
          size="large"
          onClick={handleAllDone}
          disabled={isToDoAndRejected}
          aria-label="move all right"
        >
          ≫
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={handleDone}
          disabled={isLeftChecked}
          aria-label="move selected right"
        >
          &gt;
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={handleRejected}
          disabled={isRightChecked}
          aria-label="move selected left"
        >
          &lt;
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={handleAllRejected}
          disabled={isDone}
          aria-label="move all left"
        >
          ≪
        </Button>
      </Grid>
    </ButtonContainer>
  );
};

export default ButtonContainerComponent;
