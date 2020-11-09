import React from 'react';
import {CardApi} from '../Card/api/CardApi'
import { Card } from '../../Model/Card';
import { CardStatusEnum } from '../../Model/CardStatusEnum';

it("Card API Testing Data", async function() {
    const response: Array<Card> = await CardApi.getCards()
    expect(response[1].id).toEqual(1)
    expect(response[1].patient_name).toEqual("Bill")
    expect(response[1].status).toEqual(CardStatusEnum.REJECTED)
    expect(response[1].created_date).toEqual("2020-01-01T00:12:21+0000")
    expect(response[1].arrhythmias[0]).toEqual("Pause")

    expect(response.length).toBeGreaterThan(0)
})

it("Card API Testing Propreties", async function() {
    const response: Array<Card> = await CardApi.getCards()
    expect(response[1]).toHaveProperty("id")
    expect(response[1]).toHaveProperty("patient_name")
    expect(response[1]).toHaveProperty("status")
    expect(response[1]).toHaveProperty("created_date")
    expect(response[1]).toHaveProperty("arrhythmias")
})
