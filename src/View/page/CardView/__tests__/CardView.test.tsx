import React from 'react';
import renderer from 'react-test-renderer';
import CardViewPage from '../CardView.page';


it("matches snapshot CardViewPage", () => {
    const tree = renderer.create(<CardViewPage />);
        expect(tree).toMatchSnapshot()
})
