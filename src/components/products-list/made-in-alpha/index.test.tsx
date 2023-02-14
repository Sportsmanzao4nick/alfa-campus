import {render, screen} from "@testing-library/react";
import {ProductsList} from "./index";
import React from "react";
import axios from "axios";
import {Cell} from "../../products-list-item/made-in-alpha";
import {MadeInAlpha} from "../../../pages/made-in-alpha";


// jest.mock('ProductList', () => {
//     return jest.fn(() => null)
// })
//
// expect(Cell).toHaveBeenCalledWith(props)
// expect(Cell).toHaveAttribute("price", {price})
// expect(Cell).toHaveAttribute("title", item.title)


// jest.mock('axios', ()=> ({
//     get: jest.fn(),
// }));
//
// describe('getData', () => {
//     let response: object;
//     beforeEach(() => {
//         response = {
//             products: [
//                 {
//                     id: 0,
//                     preview: "http://localhost:3000/public/images/15932051.jpeg",
//                     title: "Рюкзак «Для умных и свободных»",
//                     price: 4999,
//                     availability: true
//                 },
//                 {
//                     id: 1,
//                     preview: "http://localhost:3000/public/images/68519498.jpeg",
//                     title: "Футболка Для умных и свободных",
//                     price: 1999,
//                     availability: true
//                 }
//             ]
//         }
//     })
//
//     test('Получены верные значения',  async () => {
//         (axios.get as jest.Mock).mockReturnValue(response);
//         render(<Cell/>);
//         const data =  await screen.findAllByTestId("title-item");
//         expect(data.length).toBe(5)
//         expect(data).toBeCalledTimes(1);
//     })
// })

// test('should render test component', () => {
//     render(<ProductsList/>);
//     const element = screen.getAllByTestId('title-item');
//     expect(element).toBeInTheDocument()
// })

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
                },
                {
                    id: 2,
                    preview: "http://localhost:3000/public/images/77117755.jpeg",
                    title: "Блокнот Для умных и свободных",
                    price: 1499,
                    availability: true
                },
                {
                    id: 3,
                    preview: "http://localhost:3000/public/images/15932051.jpeg",
                    title: "Чехол с кардхолдером",
                    price: 799,
                    availability: false
                },
                {
                    id: 4,
                    preview: "http://localhost:3000/public/images/56369345.jpeg",
                    title: "Экоручка",
                    price: 99,
                    availability: true
                }
            ]
        }
    })

    test('Получены верные значения',  async () => {
        (axios.get as jest.Mock).mockReturnValue(response);
        render(<ProductsList/>)
        const data = await screen.findAllByTitle("Экоручка");
        expect(data).toBe(1)
    })
})