import React, {useEffect, useState} from "react";
import styles from './index.module.css'
import {Cell} from "../../products-list-item/made-in-alpha";
import axios from "axios";

type Props = {
    id: number,
    price: number,
    title: string
}

export const ProductsList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6c4be10d-08d6-4eb5-82dc-537abefae89f/products.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230210T050937Z&X-Amz-Expires=86400&X-Amz-Signature=3e6eeee0f11419082b93df8b0cb28bbada478a1e11904dbdadda9feac776e98e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22products.json%22&x-id=GetObject')
            .then(res => {
                setItems(res.data.products)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className={styles.container}>
            {items.map((item: Props) => {
                return (
                    <Cell indKey={item.id} price={item.price} title={item.title}/>
                );
            })}
        </div>
    )
}