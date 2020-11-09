import React from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { FormUI } from './FilterCard.s'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

type Props = {
    patientsArrhythmias: string[];
    filterData: any;
};

// FilterCardComponent is a filtering system by patient name and arrhythmias
const FilterCardComponent: React.SFC<Props> = props => {
    const { patientsArrhythmias } = props

    const [patientName, setPatientName] = React.useState('');
    const [patientArrhyt, setPatientArrhyt] = React.useState('');

    // Get patient name from input
    const handlePatientName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPatientName(event.target.value);
    };

    // Get arrhythmias from select option
    const handlePatientArrhyt = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPatientArrhyt(event.target.value);
    };

    // on click filter data by the informations filled
    const filterData = () => {
        props.filterData(patientName, patientArrhyt);
    };

    return (
        <FormUI noValidate autoComplete="off">
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <TextField
                        id="outlined-select-currency"
                        label="Filter by patient name"
                        onChange={handlePatientName}
                        value={patientName}
                        helperText="Please select patient name"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="Filter by arrhythmias"
                        value={patientArrhyt}
                        onChange={handlePatientArrhyt}
                        helperText="Please select arrhythmias"
                        variant="outlined"
                        fullWidth
                    >
                        {patientsArrhythmias.map((arrhythmias: string) => (
                            <MenuItem key={arrhythmias} value={arrhythmias}>
                                {arrhythmias}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={1}>
                    <Button onClick={filterData} variant="contained" size="large" color="primary">
                        Filter
                    </Button>
                </Grid>
            </Grid>
        </FormUI>
    );
};

export default FilterCardComponent;
