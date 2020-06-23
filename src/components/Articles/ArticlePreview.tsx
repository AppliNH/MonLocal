import React, { Component } from 'react';
import Stall_Item from '../../_models/Stall_Item';
import Button from '@material-ui/core/Button';
import { Input, TextField } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
interface ArticlePreviewProps {
    item: any;
    callback: Function;
}

class ArticlePreview extends Component<ArticlePreviewProps> {
    constructor(props: ArticlePreviewProps) {
        super(props);
    }
    state = { userQuantity: 0, error: false };


    validateInput() {
        let n = parseInt(this.state.userQuantity.toString())
        console.log(typeof n)
        console.log(n)
        if (n == undefined || n <= 0 || typeof n != "number" || isNaN(n)) {
            this.setState({ error: true })
        } else {
            this.props.callback(n)
        }

    }
    componentDidUpdate() {
        console.log(this.state.userQuantity)
    }
    render() {
        return (
            <div>
                <h1>{this.props.item.name} ({this.props.item.price}€/KG)</h1>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: 'center' }}>
                        <img style={{ width: "10vmax", height: "7vmax", flex: 2 }} src="https://www.balance-professionnelle.fr/2950-medium_default/balance-poids-prix-milliot-bmjpp.jpg" />
                        <h2 style={{ flex: 2 }}>Je veux</h2>

                        <TextField size="small" onFocus={() => this.setState({ error: false })} InputProps={{ style: { fontSize: "3vmax", fontStyle: "bold", textAlign: 'center' } }} fullWidth={false} helperText={this.state.error ? "Vous avez oublié la quantité" : null} error={this.state.error} onChange={(e) => this.setState({ userQuantity: e.target.value })} placeholder={"Quantité"} type="number" inputMode="numeric" style={{ marginLeft: 10, marginRight: 10 }} />

                        <h2 style={{ flex: 2 }}>KG</h2>
                    </div>
                    <Button style={{ marginTop: 50, backgroundColor: "#35b8be", color: "#FAFAFA" }} onClick={() => this.validateInput()}>
                        <ShoppingCart style={{ color: "#FAFAFA", marginRight: 10 }} />
                        Ajouter au panier
                        </Button>
                </div>
            </div>
        );
    }
}

export default ArticlePreview;