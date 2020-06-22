import React from 'react';
import { Card, Button } from '@material-ui/core';
import Stall_Item from '../../_models/Stall_Item';

interface ArticleCardProps {
    item: any;
    callback: Function;
    fromModal: Boolean;
    fromBasket?: Boolean;
}

const ArticleCard: React.StatelessComponent<ArticleCardProps> = (props) => {
    const { name, image, price, id } = props.item;
    //minHeight: "30%", maxHeight: "30%", minWidth: "25%", maxWidth: "25%" 
    return (
        <Card elevation={8} style={{ margin: 15, alignItems: "center" }}>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <img src={image} style={{ alignSelf: "center", width: "8vmax", height: "5vmax" }} />
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                    <div style={{ padding: 10, display: "flex", flexDirection: "column" }}>
                        <h2>{name}</h2>
                        <h1 style={{ fontSize: "3vmax" }}>{price}€</h1>
                    </div>

                    <Button onClick={() => props.callback(id)} style={{ backgroundColor: props.fromBasket ? "red" : "#35b8be", color: "#FAFAFA", flex: 1, display: "flex" }}>
                        {!props.fromModal && !props.fromBasket ? "Voir" : (props.fromBasket ? "Supprimier" : "Ajouter au panier")}
                    </Button>

                    

                </div>
            </div>
        </Card>
    );
};

export default ArticleCard;