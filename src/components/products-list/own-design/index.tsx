import React, {useEffect, useState} from "react";
import styles from './index.module.css';
import {Cell} from "../../products-list-item/own-design";
import axios from "axios";

interface Data {
    groups: [
        {
            id: number,
            title: string,
            description: string,
            products: [{
                id: number,
                preview: string,
                images: [],
                title: string,
                subtitle: string,
                price: number,
                description: string,
                colors: [],
                sizes: [],
                stickerNumbers: [],
                availability: boolean
            }]
        }
    ]
}

export const ProductsListOwnDesign = () => {
    const [itemsArr, setItems] = useState([])

    useEffect(() => {
        axios.get('./products.json')
            .then(res => {
                setItems(res.data.groups)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    for (let k of itemsArr) {
        console.log();
    }



    return (
        <div className={styles.container}>

            <Cell></Cell>
        </div>
    )
}
