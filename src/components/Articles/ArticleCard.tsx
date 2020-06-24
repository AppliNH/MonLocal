import React from 'react';
import { Card, Button } from '@material-ui/core';

interface ArticleCardProps {
    item: any;
    callback: Function;
    fromModal: Boolean;
    fromBasket?: Boolean;
}

const ArticleCard: React.StatelessComponent<ArticleCardProps> = (props) => {
    const { name, image, price, id } = props.item;
    //minHeight: "30%", maxHeight: "30%", minWidth: "25%", maxWidth: "25%" 
    //const nameSize = (18 / name.length) > 2 ? "2vmax" : (18 / name.length) + "vmax";
    //width: "25vmax", maxWidth: "25vmax", height: "12vmax" 
    return (
        <Card elevation={8} style={{ margin: 15, alignItems: "center" }}>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                    <img alt="produit" src={image} style={{ alignSelf: "center", width: "7vmax", height: "4vmax" }} />

                    <div style={{ padding: 10, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <h2 style={{ fontSize: '1.3rem' }}>{name}</h2>
                        <h1>{price}€</h1>
                    </div>
                </div>

                <Button variant="contained" onClick={() => props.callback(id)} style={{ backgroundColor: props.fromBasket ? "red" : "#35b8be", color: "#FAFAFA" }}>
                    <h1 style={{ fontSize: "2vmax" }}>Voir</h1>
                </Button>



            </div>
        </Card>
    );
};

export default ArticleCard;