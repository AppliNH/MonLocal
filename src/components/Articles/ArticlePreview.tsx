import React, { Component } from 'react';
import Stall_Item from '../../_models/Stall_Item';
import Button from '@material-ui/core/Button';

interface ArticlePreviewProps {
    item: any;
    callback: Function;
}

class ArticlePreview extends Component<ArticlePreviewProps> {
    constructor(props: ArticlePreviewProps) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>{this.props.item.name} ({this.props.item.price}€/KG)</h1>
                <div style={{display: "flex"}}>
                    <img src="https://www.balance-professionnelle.fr/2950-medium_default/balance-poids-prix-milliot-bmjpp.jpg"></img>
                <h2>Je veux</h2>
                <input></input>
                <p>KG</p>
                <Button onClick={() => this.props.callback(this.props.item.id)}></Button>
                </div>
            </div>
        );
    }
}

export default ArticlePreview;