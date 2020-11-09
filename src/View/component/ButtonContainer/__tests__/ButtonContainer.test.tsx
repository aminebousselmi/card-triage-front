import React from 'react';
import renderer from 'react-test-renderer';
import ButtonContainerComponent from '../ButtonContainer.component'

let props = {
    size: 4,
    handleAllDone: jest.fn(),
    handleAllRejected: jest.fn(),
    handleDone: jest.fn,
    handleRejected: jest.fn,
    isToDoAndRejected: true,
    isLeftChecked: true,
    isRightChecked: true,
    isDone: true,
};

it("matches snapshot ButtonContainerComponent", () => {
    const tree = renderer.create(<ButtonContainerComponent {...props} />);
        expect(tree).toMatchSnapshot()
})