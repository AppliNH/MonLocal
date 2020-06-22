import React, { Component } from 'react';
import Stall from "../../_models/StallModel";
import { updateArticlesStage, updateRoute, updateBasketContent } from "../../redux/actions"
import { connect } from 'react-redux';
import { Card, Button, Fade, Grow, Modal } from '@material-ui/core';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Close from '@material-ui/icons/Close';
import Home from '@material-ui/icons/Home'
import CreditCard from '@material-ui/icons/CreditCard';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import ArticleCard from '../../components/Articles/ArticleCard';
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';
import { getBasketContent } from '../../redux/selectors';
import Stall_Item from '../../_models/Stall_Item';
import ArticlePreview from "../../components/Articles/ArticlePreview";

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

class StallScreen extends Component<StallProps> {

    constructor(props: StallProps) {
        super(props);
    }

    state = { modalType: "", selectedProductId: 0, showModal: false, stall: this.props.stalls[this.props.stageNumber], previousStall: this.props.stalls[this.props.stageNumber - 1], nextStall: this.props.stalls[this.props.stageNumber + 1] }

    updateButtonAndScreens(newStage: number) {
        console.log(this.props.stalls[newStage + 1],)
        this.setState({
            stall: this.props.stalls[newStage],
            previousStall: this.props.stalls[newStage - 1],
            nextStall: this.props.stalls[newStage + 1]
        })
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

        const articles = (this.state.stall.items).map(
            item => <ArticleCard fromModal={false} callback={(id: number) => this.setState({ showModal: true, selectedProductId: id, modalType: "articles" })} item={item} />
        );


        const ArticleDetails = <div style={{ outline: "none" }}>

            {this.state.stall.items.find(elem => elem.id == this.state.selectedProductId) != undefined ?
                <ArticleCard fromModal={true} callback={() => { this.setState({ showModal: false }); this.props.updateBasketContent({ itemID: this.state.selectedProductId, quantity: 1, add: true }) }} item={this.state.stall.items.find(elem => elem.id == this.state.selectedProductId)} />
                :
                <h4>Une erreur s'est produite</h4>}
        </div>;

        const BasketDetails = <div style={{ maxHeight: "70vh", maxWidth: "70vw" }}>
            <div>
                <h1>Votre panier: </h1>
                <div style={{ display: "flex", flexWrap: "wrap", height: "60vh", overflow: "auto" }}>
                    {getBasketContent(this.props.reduxState, this.state.stall.id).length > 0 ?
                        getBasketContent(this.props.reduxState, this.state.stall.id).map((elem: any) => <ArticleCard callback={(productID: any) => { this.setState({ showModal: false }); this.props.updateBasketContent({ itemID: productID, quantity: 1, add: false }) }} fromModal={false} fromBasket={true} item={elem} />)
                        :
                        <h3>Votre panier est vide </h3>
                    }
                </div>
            </div>
        </div>;

        const DetailsModal = <Modal
            open={this.state.showModal}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClose={() => this.setState({ showModal: false })}>
            <Card style={{ padding: 20, outline: "none" }}>
                <div style={{ cursor: 'pointer' }} onClick={() => this.setState({ showModal: false })}>
                    <Close />
                </div>
                {this.state.modalType == "articles" ? ArticleDetails : BasketDetails}
            </Card>



        </Modal>;

        return (
            <div style={{ display: "flex", flexDirection: "column", background: "no-repeat center center fixed", backgroundImage: `url(${this.state.stall.backgroundImage})`, backgroundSize: "cover", height: "92vh", overflow: "hidden" }}>
                <Grow style={{ transformOrigin: '10 10 10' }} in={true} timeout={3000}>
                    <div style={{ flex: 1 }}>
                        <Card elevation={8} style={{ borderRadius: 50, display: 'flex', flexDirection: 'row', marginTop: 30, marginLeft: 15, marginRight: 15 }}>

                            {this.state.previousStall.name !== "" ?
                                <div onClick={() => this.previousStage()} style={{ flex: 1, cursor: "pointer", padding: 10, backgroundColor: "#FAFAFA", display: 'flex', flexDirection: "column", alignItems: "center" }}>
                                    <h3 style={{ margin: 0, fontSize: "1rem", color: this.state.previousStall.color, textAlign: "center" }}>Revenir chez votre {this.state.previousStall.name}</h3>
                                    <ArrowBack style={{ color: this.state.previousStall.color, alignSelf: 'center' }} />
                                </div>
                                :
                                <Link to="/" style={{ textDecoration: "none", flex: 1, display: "flex", padding: 10 }} onClick={() => this.props.updateRoute("/")}>
                                    <div style={{ padding: 10, backgroundColor: "#FAFAFA", display: 'flex', flex: 1, flexDirection: "column", alignItems: 'center' }}>
                                        <h3 style={{ margin: 0, fontSize: "1rem", color: "#35b8be", textAlign: "center" }}>Revenir à l'accueil</h3>
                                        <Home style={{ color: "#35b8be", alignSelf: 'center' }} />
                                    </div>
                                </Link>
                            }


                            <div style={{ padding: 20, flex: 1, backgroundColor: this.state.stall.color }}>
                                <h2 style={{ margin: 0, fontSize: "1.2em", color: "#FAFAFA", textAlign: "center" }}>Vous êtes chez votre {this.state.stall.name}</h2>
                            </div>

                            {this.state.nextStall ?

                                <div onClick={() => this.nextStage()} style={{ flex: 1, cursor: "pointer", padding: 20, backgroundColor: "#FAFAFA", display: 'flex', alignItems: "center", flexDirection: "column" }}>
                                    <h3 style={{ margin: 0, fontSize: "1rem", textAlign: "center", color: this.state.nextStall.color }}>Aller chez votre {this.state.nextStall.name}</h3>
                                    <ArrowForward style={{ color: this.state.nextStall.color, alignSelf: 'center' }} />
                                </div>
                                :
                                <div style={{ padding: 10, flex: 1, backgroundColor: "#35b8be", display: 'flex', flexDirection: "column", alignItems: "center" }}>
                                    <h3 style={{ margin: 0, fontSize: "1rem", color: "#FAFAFA", textAlign: "center" }}>Payer</h3>
                                    <CreditCard style={{ color: "#FAFAFA", alignSelf: 'center' }} />
                                </div>
                            }
                        </Card>
                    </div>
                </Grow>
                {ArticlesGrid(articles)}


                <Grow in={true} timeout={3000}>
                    <Button onClick={() => this.setState({ showModal: true, modalType: "basket" })} style={{ backgroundColor: "#35b8be", color: "#FAFAFA", padding: 5, marginLeft: "25vw", marginRight: "25vw" }}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: 'center', }}>
                            <ShoppingCart style={{ fontSize: "3vmax", marginRight: 10 }} />
                            <h2>Consulter mon panier</h2>
                        </div>
                    </Button>
                </Grow>

                {DetailsModal}

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
    return <Fade timeout={3500} in={true}>
        <Card elevation={8} style={{ alignItems: "center", backgroundColor: "rgba(0,0,0,0.3)", marginTop: 10, borderRadius: 15, flex: 4, display: "flex", flexWrap: 'wrap', marginLeft: 15, marginRight: 15, overflow: "auto", }}>
            {articles}
        </Card>
    </Fade>;
}

