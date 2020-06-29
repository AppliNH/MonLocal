import React, { Component } from 'react';
import { Card, Snackbar, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { getBasketContent } from '../../redux/selectors';
import BasketArticle from '../../components/Articles/BasketArticle';
import { updateArticlesStage, updateRoute, updateBasketContent, emptyBasketContent } from "../../redux/actions"
import Help from '@material-ui/icons/Help';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

import MuiAlert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';


interface PayScreenProps {
    basket: Array<any>;
    reduxState: any;
    updateBasketContent: Function;
    emptyBasketContent: Function;
    updateRoute: Function;
    updateArticlesStage: Function;
}

function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class PayScreen extends Component<PayScreenProps> {

    state = { snackType: "info", selectedCategoryId: "", snackOpen: false, snackMessage: "", basketCheck: false }

    cancelAll() {
        this.props.emptyBasketContent();
        this.props.updateRoute("/");
        this.props.updateArticlesStage(1)
    }

    render() {

        const SnackBarMessage = <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={this.state.snackOpen} onClose={() => this.setState({ snackOpen: false })} autoHideDuration={2000} >
            <Alert onClose={() => this.setState({ snackOpen: false })} severity={this.state.snackType}>
                <h2>{this.state.snackMessage}</h2>
            </Alert>
        </Snackbar>

        let basketContent = getBasketContent(this.props.reduxState);
        let total = basketContent.length > 0 ? basketContent.reduce((t: number, e: any) => t + (e.price * e.quantity), 0).toFixed(2) : 0;

        return (
            <div style={{ display: "flex", flexDirection: "column", marginBottom: "10vh" }}>

                {
                    !this.state.basketCheck ?
                        <div>
                            <Link to="/articles" style={{ textDecoration: "none" }}>
                                <Button style={{ backgroundColor: "red", color: "#FAFAFA" }}> <ChevronLeft /> Retourner aux échoppes</Button>
                            </Link>
                            <Card style={{ padding: 10, margin: 10, flex: 1 }}>
                                <div>
                                    <h1>Votre panier: </h1>
                                    <div>
                                        {
                                            basketContent.length > 0 ?
                                                <div style={{ display: "flex", flexWrap: "wrap", maxHeight: "50vh", overflow: "auto", padding: 10 }}>
                                                    {basketContent.map((elem: any) =>
                                                        <BasketArticle callback={(productID: any, q: number) => { this.setState({ snackType: "error", snackMessage: "Quantité supprimée du panier !", snackOpen: true }); this.props.updateBasketContent({ itemID: productID, quantity: q, add: false }) }} item={elem} />)}
                                                </div>
                                                :
                                                <h3>Votre panier est vide </h3>
                                        }
                                        <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                                <h2>
                                                    Total :
                                            </h2>
                                                <h2 style={{ color: "#35b8be" }}>{total}€</h2>
                                            </div>
                                            <Button onClick={() => this.setState({ basketCheck: true })} style={{ backgroundColor: "#35b8be", color: "#FAFAFA" }}>Valider le panier
                                        <Check />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        :
                        <div>
                            <Button onClick={() => this.setState({ basketCheck: false })} style={{ backgroundColor: "red", color: "#FAFAFA" }}> <ChevronLeft /> Retourner vers mon panier</Button>
                            <div style={{ display: "flex", flexWrap: "wrap" }}>

                                <div style={{ display: "flex", flexWrap: "wrap" }}>
                                    <Card style={{ margin: 10, padding: 10, flex: 1 }}>
                                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                            <ThumbUp style={{ color: "#35b8be", marginRight: 10, fontSize: "3vmax" }} />
                                            <h2 style={{ fontSize: "1.2rem" }}>Tout est prêt ! Vous n'avez plus qu'à remplir le formulaire ci-dessous, et nous vous livrerons.</h2>
                                        </div>
                                        <h3 >Le paiement sera effectué à la livraison</h3>
                                    </Card>
                                    <Card style={{ margin: 10, padding: 10, flex: 1 }}>
                                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                            <Help style={{ marginRight: 10, fontSize: "3.5vmax" }} />
                                            <h2 style={{ fontSize: "1.2rem" }}>Un problème ? Une question ?</h2>
                                        </div>

                                        <h4>Entrez votre numéro de téléphone ici et nous vous appellerons pour vous guider: </h4>
                                        <TextField type="number" placeholder="Tapez votre numéro ici" style={{ width: "100%" }} />
                                    </Card>
                                </div>
                                <Card style={{ margin: 10, padding: 10, }} >
                                    <h2 style={{ width: "80%", fontSize: "1.2rem" }}>Merci de renseigner votre adresse pour une livraison à domicile :</h2>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                        <TextField placeholder="Adresse" style={{ margin: 10 }} />
                                        <TextField placeholder="Ville" style={{ margin: 10 }} />
                                        <TextField placeholder="Téléphone" type="number" style={{ margin: 10 }} />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <Link to="/" onClick={() => this.cancelAll()} style={{ textDecoration: "none", }}>
                                            <Button style={{ backgroundColor: "red", color: "#FAFAFA" }}>Annuler la commande</Button>
                                        </Link>
                                        <Button style={{ backgroundColor: "#35b8be", color: "#FAFAFA" }}> Valider la commande</Button>
                                    </div>
                                </Card>

                            </div>
                        </div>

                }

            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        basket: state.data.basket,
        reduxState: state
    }
}

export default connect(mapStateToProps, { updateBasketContent, emptyBasketContent, updateRoute, updateArticlesStage })(PayScreen);