import React, {useEffect, useState} from "react";
import styles from './index.module.css'
import {Cell} from "../../products-list-item/made-in-alpha";
import axios from "axios";

export const ProductsList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('./products-made-in-alpha.json')
            .then(res => {
                setItems(res.data.products)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className={styles.container}>
            {items.map((item: { id: number, price: number, title: string }) => {
                return (
                    <Cell key={item.id} id = {item.id} price={item.price} title={item.title}/>
                );
            })}
        </div>
    )
}

