import React from 'react';
import renderer from 'react-test-renderer';
import MenuComponent from '../Menu.component';

it("matches snapshot MenuComponent", () => {
    const tree = renderer.create(<MenuComponent />);
        expect(tree).toMatchSnapshot()
})