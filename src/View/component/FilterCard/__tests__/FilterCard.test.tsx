import React from 'react';
import renderer from 'react-test-renderer';
import FilterCardComponent from '../FilterCard.component';

var patientsArrhythmias : Array<string> = ["AFib", "AV Block", "Pause", "PSVC", "PVC"]

let props = {
    patientsArrhythmias: patientsArrhythmias,
    filterData: jest.fn()
};

it("matches snapshot FilterCardComponent", () => {
    const tree = renderer.create(<FilterCardComponent {...props} />);
        expect(tree).toMatchSnapshot()
})