import React, { Component } from 'react';
import Stall from "../../_models/StallModel";
import { updateArticlesStage, updateRoute } from "../../redux/actions"
import { connect } from 'react-redux';
import { Card, Button } from '@material-ui/core';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Home from '@material-ui/icons/Home'
import CreditCard from '@material-ui/icons/CreditCard';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import ArticleCard from '../../components/Articles/ArticleCard';


interface StallProps {
    stageNumber: number;
    stalls: Array<Stall>;
    updateArticlesStage: Function;
    updateRoute: Function;
}

class StallScreen extends Component<StallProps> {

    constructor(props: StallProps) {
        super(props);
    }

    state = { stall: this.props.stalls[this.props.stageNumber], previousStall: this.props.stalls[this.props.stageNumber - 1], nextStall: this.props.stalls[this.props.stageNumber + 1] }
    componentDidMount() {
        console.log(this.props.stageNumber);
        console.log(this.props.stalls[this.props.stageNumber + 1]);
    }
    componentDidUpdate() {
        console.log(this.props.stageNumber);
        console.log(this.state.stall);
    }

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
            item => <ArticleCard item={item} />
        );

        return (
            <div style={{ display: "flex", flexDirection: "column", background: "no-repeat center center fixed", backgroundImage: `url(${this.state.stall.backgroundImage})`, backgroundSize: "cover", height: "92vh", overflow: "hidden" }}>
                <div style={{ flex: 1 }}>
                    <Card elevation={8} style={{ borderRadius: 50, display: 'flex', flexDirection: 'row', marginTop: 30, marginLeft: 15, marginRight: 15 }}>

                        {this.state.previousStall.name != "" ?
                            <div onClick={() => this.previousStage()} style={{ flex: 1, cursor: "pointer", padding: 10, backgroundColor: "#FAFAFA", display: 'flex', flexDirection: "column", alignItems: "center" }}>
                                <h3 style={{ margin: 0, fontSize: "1rem", color: this.state.previousStall.color, textAlign: "center" }}>Revenir chez votre {this.state.previousStall.name}</h3>
                                <ArrowBack style={{ color: this.state.previousStall.color, alignSelf: 'center' }} />
                            </div>
                            :
                            <Link to="/" style={{ textDecoration: "none", flex: 1, display: "flex",padding:10 }} onClick={() => this.props.updateRoute("/")}>
                                <div style={{ padding: 10, backgroundColor: "#FAFAFA", display: 'flex', flex: 1, flexDirection: "column", alignItems: 'center' }}>
                                    <h3 style={{ margin: 0, fontSize: "1rem", color: "#35b8be", textAlign: "center" }}>Revenir à l'accueil</h3>
                                    <Home style={{ color: "#35b8be", alignSelf: 'center' }} />
                                </div>
                            </Link>
                        }


                        <div style={{ padding: 20, flex: 1, backgroundColor: this.state.stall.color }}>
                            <h2 style={{ margin: 0, fontSize: "1rem", color: "#FAFAFA", textAlign: "center" }}>Vous êtes chez votre {this.state.stall.name}</h2>
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

                <Card elevation={8} style={{ alignItems: "center", backgroundColor: "rgba(0,0,0,0.3)", marginTop: 10, borderRadius: 15, flex: 4, display: "flex", flexWrap: 'wrap', marginLeft: 15, marginRight: 15, overflow: "auto" }}>
                    {articles}
                </Card>
                <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
                    <div></div>
                    <Button style={{ backgroundColor: "#35b8be", color: "#FAFAFA", padding: 5 }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: 'center', }}>
                            <h2>Consulter mon panier</h2>
                            <ShoppingCart style={{ fontSize: "3vmax", marginRight: 10 }} />
                        </div>
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        stageNumber: state.stallsdata.stageNumber,
        stalls: state.stallsdata.stalls,

    }
}
export default connect(mapStateToProps, { updateArticlesStage, updateRoute })(StallScreen);