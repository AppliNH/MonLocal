import React, { Component } from 'react';
import { Card } from '@material-ui/core';

interface BasketArticleProps {
    item: any;
}

class BasketArticle extends Component<BasketArticleProps> {
    constructor(props: BasketArticleProps) {
        super(props);

    }
    fullPrice = (this.props.item.quantity * this.props.item.price).toFixed(2)
    render() {
        return (

            <Card elevation={8} style={{ width: "25vmax", padding: 10, margin: 10, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flex: 5 }}>
                    <div style={{ flex: 3 }}>
                        <h2>{this.props.item.quantity}Kg</h2>
                        <h4 style={{ fontWeight: "normal", fontStyle: "italic" }}>{this.props.item.price}€/Kg</h4>
                    </div>
                    <Card style={{ padding: 5, flex: 3, display: 'flex', flexDirection: "column", alignItems: "center" }}>
                        <img style={{ width: "8vmax", height: "5vmax" }} src={this.props.item.image} />

                        <h3>{this.props.item.name}</h3>
                    </Card>
                </div>
                <div style={{  flex: 2, color: "#35b8be" }}>
                    <h1 >{this.fullPrice}€</h1>
                </div>

            </Card>
        );
    }
}

export default BasketArticle;