import React from 'react';
import renderer from 'react-test-renderer';
import CardComponent from '../Card.component';
import { Card } from '../../../../Model/Card'
import { CardStatusEnum } from '../../../../Model/CardStatusEnum';

var curCard: Card = {
    "id": 1,
    "patient_name": "Bill",
    "status": CardStatusEnum.REJECTED,
    "created_date": new Date(2020, 1, 1, 0, 12, 21),
    "arrhythmias": ["Pause"] 
};

let props = {
    card: curCard
};

it("matches snapshot CardComponent", () => {
    const tree = renderer.create(<CardComponent card={props.card} />);
    expect(tree).toMatchSnapshot()
})