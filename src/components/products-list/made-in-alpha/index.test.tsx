import {ProductsList} from "./index";
import React from "react";
import axios from "axios";

jest.mock('axios')

describe('getData', () => {
    let response: object;
    beforeEach(() => {
        response = {
            products: [
                {
                    id: 0,
                    preview: "http://localhost:3000/public/images/15932051.jpeg",
                    title: "Рюкзак «Для умных и свободных»",
                    price: 4999,
                    availability: true
                },
                {
                    id: 1,
                    preview: "http://localhost:3000/public/images/68519498.jpeg",
                    title: "Футболка Для умных и свободных",
                    price: 1999,
                    availability: true
                }
            ]
        }
    })

    test('Получены верные значения', async () => {
        (axios.get as jest.Mock).mockReturnValue(response);
        const data = await ProductsList;
        expect(axios.get).toBeCalledTimes(1);
        expect(data).toEqual([0, 1])
    })
})