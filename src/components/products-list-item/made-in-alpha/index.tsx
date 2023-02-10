import React from "react";
import styles from './index.module.css'
import {PureCell} from "@alfalab/core-components/pure-cell";
import {Typography} from "@alfalab/core-components/typography";

type Props = {
    indKey: number,
    price: number,
    title: string
}

export const Cell = ({indKey, price, title}: Props) => {
    return (
        <PureCell
            className={styles.container}
            key={indKey}
            verticalPadding='airy'
            direction='vertical'>
            <PureCell.Graphics verticalAlign='center'>
                <div className={styles.graphics}/>
            </PureCell.Graphics>
            <PureCell.Content>
                <PureCell.Main>
                    <Typography.TitleResponsive
                        view="small"
                        tag="h2"
                        weight="medium"
                        font="styrene">{title}</Typography.TitleResponsive>
                    <PureCell.Amount
                        value={price}
                        currency='RUR'
                        minority={1}
                        weight="bold"/>
                </PureCell.Main>
            </PureCell.Content>
        </PureCell>
    );
};

