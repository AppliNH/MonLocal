import React, { Component } from 'react';
import { Card, Button, Input, TextField } from '@material-ui/core';

interface BasketArticleProps {
    item: any;
    callback: Function;
}

class BasketArticle extends Component<BasketArticleProps> {
    constructor(props: BasketArticleProps) {
        super(props);

    }
    fullPrice = (this.props.item.quantity * this.props.item.price).toFixed(2);
    state = { showDeleteQuantity: false, deleteQuantity: 0, error: false };

    validateInput() {
        let n = parseFloat(this.state.deleteQuantity.toString())
        console.log(typeof n)
        console.log(n)
        if (n == undefined || n <= 0 || typeof n != "number" || isNaN(n)) {
            this.setState({ error: true })
        } else {
            this.props.callback(this.props.item.id, n);
            this.setState({ showDeleteQuantity: false })
        }

    }

    render() {
        return (
            <div style={{ margin: 10 }}>

                <Card elevation={8} style={{ width: "25vmax", padding: 10, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flex: 5 }}>
                        <div style={{ flex: 3 }}>
                            <h2 style={{ fontSize: "3vmax" }}>{this.props.item.quantity}Kg</h2>
                            <h4 style={{ fontWeight: "normal", fontStyle: "italic" }}>{this.props.item.price}€/Kg</h4>
                        </div>
                        <Card style={{ padding: 5, flex: 3, display: 'flex', flexDirection: "column", alignItems: "center" }}>
                            <img style={{ width: "8vmax", height: "5vmax" }} src={this.props.item.image} />

                            <h3>{this.props.item.name}</h3>
                        </Card>
                    </div>


                    {
                        this.state.showDeleteQuantity ?
                            <div style={{ flexDirection: "column", display: "flex", flex: 1, marginTop: 10 }}>
                                <TextField onChange={(e) => this.setState({ deleteQuantity: e.target.value })} helperText={this.state.error ? "Vous avez oublié la quantité" : null} error={this.state.error} variant="outlined" size="medium" InputProps={{ style: { fontSize: "1.5vmax" } }} type="number" inputMode="numeric" fullWidth placeholder="Quantité à supprimer" />
                                <Button onClick={() => this.validateInput()} style={{ backgroundColor: "red", color: "#FAFAFA" }}>Supprimer</Button>
                                <Button onClick={() => this.setState({ showDeleteQuantity: false })} style={{ backgroundColor: "#FAFAFA", color: "#35b8be" }}>Annuler</Button>
                            </div>
                            :
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Button onClick={() => this.setState({ showDeleteQuantity: true })} style={{ color: "#FAFAFA", backgroundColor: "red", margin: 0 }}>
                                    <h1 style={{ fontSize: "1.5vmax" }}>Supprimer</h1>
                                </Button>
                                <h1 style={{ color: "#35b8be", fontSize: "3vmax" }} >{this.fullPrice}€</h1>
                            </div>
                    }

                </Card>

            </div>
        );
    }
}

export default BasketArticle;