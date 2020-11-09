import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '../Spinner.component';

it("matches snapshot Spinner True", () => {
    const tree = renderer.create(<Spinner isLoading={true} />);
        expect(tree).toMatchSnapshot()
})

it("matches snapshot Spinner False", () => {
    const tree = renderer.create(<Spinner isLoading={false} />);
        expect(tree).toMatchSnapshot()
})
