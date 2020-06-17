import React from 'react';
import { Card } from '@material-ui/core';
import Stall_Item from '../../_models/Stall_Item';

interface ArticleCardProps {
    item: Stall_Item;
}

const ArticleCard: React.StatelessComponent<ArticleCardProps> = (props) => {
    const { name, image, price } = props.item;
    return (
        <Card elevation={8} style={{ margin: 15 }}>
            <img src={image} />
            <div style={{ padding: 10 }}>
                <h3>{name}</h3>
                <p style={{ textDecoration: "bold" }}>{price}€</p>
            </div>
        </Card>
    );
};

export default ArticleCard;