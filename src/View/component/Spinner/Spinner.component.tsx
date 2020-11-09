import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './Spinner.s';

type Props = {
    isLoading: boolean
};

// Spinner to ensure better user experience
const Spinner: React.SFC<Props> = props => {

    const { isLoading } = props
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) :
        (
            <>
                {props.children}
            </>
        )
}

export default Spinner;