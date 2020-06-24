import React, { Component } from 'react';
import Stall from "../../_models/StallModel";
import { updateArticlesStage, updateRoute, updateBasketContent } from "../../redux/actions"
import { connect } from 'react-redux';
import { Card, Button, Fade, Grow, Modal, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Close from '@material-ui/icons/Close';
import Home from '@material-ui/icons/Home'
import Check from '@material-ui/icons/Check'
import CreditCard from '@material-ui/icons/CreditCard';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import ArticleCard from '../../components/Articles/ArticleCard';
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';
import { getBasketContent } from '../../redux/selectors';
import Stall_Item from '../../_models/Stall_Item';
import ArticlePreview from "../../components/Articles/ArticlePreview";
import BasketArticle from '../../components/Articles/BasketArticle';


interface StallProps {
    stageNumber: number;
    stalls: Array<Stall>;
    updateArticlesStage: Function;
    updateRoute: Function;
    basket: Array<any>;
    updateBasketContent: Function;
    reduxState: any;
}

const transitionStyles = {
    unmounted: 1,
    entering: 0.5,
    entered: 0.75,
    exiting: 1,
    exited: 1
};

function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class StallScreen extends Component<StallProps> {

    constructor(props: StallProps) {
        super(props);
    }

    state = { snackType: "info", selectedCategoryId: "", snackOpen: false, snackMessage: "", modalType: "", selectedProductId: 0, showModal: false, stall: this.props.stalls[this.props.stageNumber], previousStall: this.props.stalls[this.props.stageNumber - 1], nextStall: this.props.stalls[this.props.stageNumber + 1] }

    updateButtonAndScreens(newStage: number) {
        console.log(this.props.stalls[newStage + 1],)
        this.setState({
            stall: this.props.stalls[newStage],
            previousStall: this.props.stalls[newStage - 1],
            nextStall: this.props.stalls[newStage + 1]
        })
    }

    componentDidMount() {
        this.setState({ selectedCategoryId: this.state.stall.categories[0].id })
    }

    nextStage() {
        this.props.updateArticlesStage(this.props.stageNumber + 1);
        this.updateButtonAndScreens(this.props.stageNumber + 1);
    }
    previousStage() {
        this.props.updateArticlesStage(this.props.stageNumber - 1);
        this.updateButtonAndScreens(this.props.stageNumber - 1);
    }



    render() {

        const articles = (this.state.stall.items).filter(e => e.categoryID == this.state.selectedCategoryId).map(
            item => <ArticleCard fromModal={false} callback={(id: number) => this.setState({ showModal: true, selectedProductId: id, modalType: "articles" })} item={item} />
        );


        const ArticleDetails = <div style={{ outline: "none" }}>

            {this.state.stall.items.find(elem => elem.id == this.state.selectedProductId) != undefined ?
                <ArticlePreview callback={(q: number) => { this.setState({ showModal: false, snackOpen: true, snackMessage: "Article ajouté dans votre panier !", snackType: "info" }); this.props.updateBasketContent({ itemID: this.state.selectedProductId, quantity: q, add: true }) }} item={this.state.stall.items.find(elem => elem.id == this.state.selectedProductId)} />
                :
                <h4>Une erreur s'est produite</h4>}
        </div>;
        // maxHeight: "70vh", maxWidth: "70vw",
        const BasketDetails = <div style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
            <div>
                <h1>Votre panier: </h1>
                <div style={{ display: "flex", flexWrap: "wrap", maxHeight: "60vh", overflow: "auto", padding: 10 }}>
                    {getBasketContent(this.props.reduxState, this.state.stall.id).length > 0 ?
                        getBasketContent(this.props.reduxState, this.state.stall.id).map((elem: any) =>
                            //<ArticleCard callback={(productID: any) => { this.setState({ snackType: "error", snackMessage: "Article supprimé du panier !", snackOpen: true }); this.props.updateBasketContent({ itemID: productID, quantity: 1, add: false }) }} fromModal={false} fromBasket={true} item={elem} />)
                            <BasketArticle callback={(productID: any, q: number) => { this.setState({ snackType: "error", snackMessage: "Quantité supprimée du panier !", snackOpen: true }); this.props.updateBasketContent({ itemID: productID, quantity: q, add: false }) }} item={elem} />)
                        :
                        <h3>Votre panier est vide </h3>
                    }
                </div>
            </div>
        </div>;

        const SnackBarMessage = <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={this.state.snackOpen} onClose={() => this.setState({ snackOpen: false })} autoHideDuration={2000} >
            <Alert onClose={() => this.setState({ snackOpen: false })} severity={this.state.snackType}>
                <h2>{this.state.snackMessage}</h2>
            </Alert>
        </Snackbar>

        const DetailsModal = <Modal
            open={this.state.showModal}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}
            onClose={() => this.setState({ showModal: false })}>
            <Card style={{ padding: 10, outline: "none", width: this.state.modalType == "articles" ? "" : "80%" }}>
                <div style={{ cursor: 'pointer' }} onClick={() => this.setState({ showModal: false })}>
                    <Close />
                </div>
                {this.state.modalType == "articles" ? ArticleDetails : BasketDetails}
            </Card>



        </Modal>;

        return (
            <div style={{ display: "flex", flexDirection: "column", background: "no-repeat center center fixed", backgroundImage: `url(${this.state.stall.backgroundImage})`, backgroundSize: "cover", height: "92vh", overflow: "hidden" }}>
                <Grow style={{ transformOrigin: '10 10 10', flex: 1 }} in={true} timeout={3000}>
                    <div style={{ flex: 1 }}>
                        <Card elevation={8} style={{ borderRadius: 50, display: 'flex', flexDirection: 'row', marginTop: 30, marginLeft: 15, marginRight: 15 }}>

                            {this.state.previousStall.name !== "" ?
                                <div onClick={() => this.previousStage()} style={{ flex: 1, cursor: "pointer", padding: 10, backgroundColor: "#FAFAFA", display: 'flex', flexDirection: "column", alignItems: "center" }}>
                                    <h3 style={{ margin: 0, fontSize: "1.2rem", color: this.state.previousStall.color, textAlign: "center" }}>Revenir chez votre {this.state.previousStall.name}</h3>
                                    <ArrowBack style={{ color: this.state.previousStall.color, alignSelf: 'center' }} />
                                </div>
                                :
                                <Link to="/" style={{ textDecoration: "none", flex: 1, display: "flex", padding: 10 }} onClick={() => this.props.updateRoute("/")}>
                                    <div style={{ padding: 10, backgroundColor: "#FAFAFA", display: 'flex', flex: 1, flexDirection: "column", alignItems: 'center' }}>
                                        <h3 style={{ margin: 0, fontSize: "1.2rem", color: "#35b8be", textAlign: "center" }}>Quitter votre marché</h3>
                                        <Close style={{ color: "#35b8be", alignSelf: 'center' }} />
                                    </div>
                                </Link>
                            }


                            <div style={{ padding: 20, flex: 1, backgroundColor: this.state.stall.color }}>
                                <h2 style={{ margin: 0, fontSize: "1.2rem", color: "#FAFAFA", textAlign: "center" }}>Vous êtes chez votre {this.state.stall.name}</h2>
                            </div>

                            {this.state.nextStall ?

                                <div onClick={() => this.nextStage()} style={{ flex: 1, cursor: "pointer", padding: 20, backgroundColor: "#FAFAFA", display: 'flex', alignItems: "center", flexDirection: "column" }}>
                                    <h3 style={{ margin: 0, fontSize: "1.2rem", textAlign: "center", color: this.state.nextStall.color }}>Aller chez votre {this.state.nextStall.name}</h3>
                                    <ArrowForward style={{ color: this.state.nextStall.color, alignSelf: 'center' }} />
                                </div>
                                :
                                <div style={{ padding: 10, flex: 1, backgroundColor: "#35b8be", display: 'flex', flexDirection: "column", alignItems: "center" }}>
                                    <h3 style={{ margin: 0, fontSize: "1.2rem", color: "#FAFAFA", textAlign: "center" }}>Payer</h3>
                                    <CreditCard style={{ color: "#FAFAFA", alignSelf: 'center' }} />
                                </div>
                            }
                        </Card>
                    </div>
                </Grow>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", flex: 4, marginTop: 20, paddingLeft: 10, paddingRight: 10, }}>
                    <div style={{ display: "flex", flexWrap: "wrap-reverse", flex: 1, justifyContent: "space-around", alignItems: "center" }}>

                        <Grow in={true} style={{}} timeout={3000}>
                            <Button onClick={() => this.setState({ showModal: true, modalType: "basket" })} style={{ backgroundColor: "#35b8be", color: "#FAFAFA", padding: 5 }}>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: 'center', }}>
                                    <ShoppingCart style={{ fontSize: "2vmax", marginRight: 10 }} />
                                    <h2 style={{ fontSize: "2vmax", }}>Consulter mon panier</h2>
                                </div>
                            </Button>
                        </Grow>

                        <Card style={{ backgroundColor: "rgba(0,0,0,0.3)", borderRadius: 15, display: "flex", padding: 20, alignItems: "center", flexDirection: "column", alignSelf: "flex-start", margin: 10 }}>
                            <h1 style={{ fontSize: "2vmax", color: "#FAFAFA" }}>Catégories</h1>
                            <div style={{ flexWrap: "wrap", display: "flex" }}>
                                {
                                    this.state.stall.categories.map(cat => <Button onClick={() => this.setState({ selectedCategoryId: cat.id })} style={{ backgroundColor: "#35b8be", color: "#FAFAFA", padding: 10, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                        {cat.name}
                                        {this.state.selectedCategoryId == cat.id ? <Check /> : null}
                                    </Button>)
                                }
                            </div>

                        </Card>


                    </div>
                    {ArticlesGrid(articles)}

                </div>




                {DetailsModal}
                {SnackBarMessage}

            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        stageNumber: state.stallsdata.stageNumber,
        stalls: state.stallsdata.stalls,
        basket: state.data.basket,
        reduxState: state


    }
}
export default connect(mapStateToProps, { updateArticlesStage, updateRoute, updateBasketContent })(StallScreen);




function ArticlesGrid(articles: JSX.Element[]) {
    return <Fade style={{ flex: 4 }} timeout={3500} in={true}>
        <Card elevation={8} style={{
            maxHeight: "63vh",
            alignItems: "center",  backgroundColor: "rgba(0,0,0,0.3)", borderRadius: 15, display: "flex", flexWrap: 'wrap', overflow: "auto"
        }}>

            {articles} 

        </Card>
    </Fade>;
}

