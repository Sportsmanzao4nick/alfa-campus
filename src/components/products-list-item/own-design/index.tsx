import {PureCell} from "@alfalab/core-components/pure-cell";
import styles from "./index.module.css"
import {Typography} from "@alfalab/core-components/typography";
import React from "react";
import {Data} from "./types";

export const Cell = ({id, title, description, products}: Data) => {
    return (
        <div key={id}
             className={styles.container}>
            <Typography.TitleResponsive
                className={styles.container_header}
                color="accent"
                tag="h2"
                weight="bold"
                font="styrene">
                {title}
            </Typography.TitleResponsive>
            <Typography.Text
                className={styles.text}
                view="primary-large"
                tag="div"
                weight="medium">
                {description}
            </Typography.Text>
            <div className={styles.items_container}>
                {products.map(product => {
                    return (
                        <PureCell
                            className={styles.item_container}
                            verticalPadding='airy'
                            direction='vertical'>
                            <PureCell.Graphics verticalAlign='center'>
                                <div className={styles.graphics}/>
                            </PureCell.Graphics>
                            <PureCell.Content>
                                <PureCell.Main>
                                    <Typography.TitleResponsive
                                        className={styles.text}
                                        view="xsmall"
                                        tag="h2"
                                        weight="medium"
                                        font="styrene">
                                        {product.title}
                                    </Typography.TitleResponsive>
                                    <Typography.Text
                                        className={styles.text}
                                        view="primary-small"
                                        tag="p"
                                        weight="bold"
                                        color="tertiary">
                                        {product.subtitle}
                                    </Typography.Text>
                                    <PureCell.Amount
                                        className={styles.text}
                                        value={product.price}
                                        currency='RUR'
                                        minority={1}
                                        weight="bold"/>
                                </PureCell.Main>
                            </PureCell.Content>
                        </PureCell>
                    )
                })}
            </div>
        </div>
    );
};