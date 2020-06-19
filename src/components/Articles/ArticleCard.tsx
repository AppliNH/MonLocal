import React from 'react';
import { Card, Button } from '@material-ui/core';
import Stall_Item from '../../_models/Stall_Item';

interface ArticleCardProps {
    item: Stall_Item;
}

const ArticleCard: React.StatelessComponent<ArticleCardProps> = (props) => {
    const { name, image, price } = props.item;
    //minHeight: "30%", maxHeight: "30%", minWidth: "25%", maxWidth: "25%" 
    return (
        <Card elevation={8} style={{ margin: 15, alignItems: "center" }}> 
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <img src={image} style={{ alignSelf: "center", width: "8vmax", height: "5vmax" }} />
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div style={{ padding: 10, display: "flex", flexDirection: "column" }}>
                        <h2>{name}</h2>
                        <h1 style={{ fontSize: "3vmax" }}>{price}€</h1>
                    </div>
                    <Button style={{ backgroundColor: "#35b8be", color: "#FAFAFA", flex: 1, display: "flex" }}>
                        Voir
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default ArticleCard;