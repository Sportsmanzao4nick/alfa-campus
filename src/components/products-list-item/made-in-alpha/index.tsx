import React from "react";
import styles from './index.module.css'
import {PureCell} from "@alfalab/core-components/pure-cell";
import {Typography} from "@alfalab/core-components/typography";

export const Cell = ({id, price, title}: { id: number, price: number, title: string }) => {
    return (
        <PureCell
            className={styles.container}
            key={id}
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
                        font="styrene"
                        dataTestId="title-item">
                        {title}
                    </Typography.TitleResponsive>
                    <PureCell.Amount
                        className={styles.text}
                        value={price}
                        currency='RUR'
                        minority={1}
                        weight="bold"/>
                </PureCell.Main>
            </PureCell.Content>
        </PureCell>
    );
};

