import React from "react";
import styles from './index.module.css'
import {PureCell} from "@alfalab/core-components/pure-cell";
import {Typography} from "@alfalab/core-components/typography";
import {NavLink} from "react-router-dom";

export const Cell = ({id, preview, price, title}: { id: number, preview: string, price: number, title: string }) => {
        return (
            <PureCell
                className={styles.container}
                key={id}
                verticalPadding='airy'
                direction='vertical'>
                <PureCell.Graphics verticalAlign='top'>
                    <div className={styles.graphics}>
                        <img className={styles.images} src={preview}/>
                    </div>
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

