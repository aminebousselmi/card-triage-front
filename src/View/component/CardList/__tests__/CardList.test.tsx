import React from 'react';
import renderer from 'react-test-renderer';
import CardListComponent from '../CardList.component';

let props = {
    size: 4,
    cards: [],
    handleToggle: jest.fn(),
    checked: [],
};

it("matches snapshot CardListComponent", () => {
    const tree = renderer.create(<CardListComponent {...props} />);
        expect(tree).toMatchSnapshot()
})