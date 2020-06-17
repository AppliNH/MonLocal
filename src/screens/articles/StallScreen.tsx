import React, { Component } from 'react';
import Stall from "../../_models/StallModel";
import { updateArticlesStage, updateRoute } from "../../redux/actions"
import { connect } from 'react-redux';
import { Card, Button } from '@material-ui/core';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Home from '@material-ui/icons/Home'
import CreditCard from '@material-ui/icons/CreditCard';
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
            <div style={{ display: "flex", flexDirection: "column", background: "no-repeat center center fixed", backgroundImage: `url(${this.state.stall.backgroundImage})`, backgroundSize: "cover", height: "90vh", overflow: "hidden" }}>
                <div style={{ zIndex: 2, flex: 1 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: 30 }}>
                        {this.state.previousStall.name != "" ?
                            <Button color="inherit" variant="contained" onClick={() => this.previousStage()} style={{ flex: 1, padding: 10, backgroundColor: this.state.previousStall.color, display: 'flex', flexDirection: "row", marginLeft: 10, marginRight: 10 }}>
                                <ArrowBack style={{ color: "#FAFAFA", alignSelf: 'center', marginRight: 10 }} />
                                <h3 style={{ margin: 0, color: "#FAFAFA", textAlign: "center" }}>Revenir chez votre {this.state.previousStall.name}</h3>
                            </Button> :
                            <Link to="/" style={{ textDecoration: "none", flex: 1 }} onClick={() => this.props.updateRoute()}>
                                <Button color="inherit" variant="contained" style={{ width: "95%",padding: 10, backgroundColor: "#35b8be", marginLeft: 10, display: 'flex', flexDirection: "row", marginRight: 10 }}>
                                    <Home style={{ color: "#FAFAFA", alignSelf: 'center', marginRight: 10 }} />
                                    <h3 style={{ margin: 0, color: "#FAFAFA", textAlign: "center" }}>Revenir à l'accueil</h3>
                                </Button>
                            </Link>
                        }


                        <Card elevation={8} style={{ padding: 20, flex: 1, backgroundColor: this.state.stall.color, marginLeft: 10, marginRight: 10, alignSelf: "center" }}>
                            <h2 style={{ margin: 0, color: "#FAFAFA", textAlign: "center" }}>Vous êtes chez votre {this.state.stall.name}</h2>
                        </Card>

                        {this.state.nextStall ?

                            <Button color="inherit" variant="contained" onClick={() => this.nextStage()} style={{ flex: 1, cursor: "pointer", padding: 10, backgroundColor: this.state.nextStall.color, marginLeft: 10, marginRight: 10, display: 'flex', flexDirection: "row" }}>
                                <h3 style={{ margin: 0, color: "#FAFAFA", textAlign: "center" }}>Aller chez votre {this.state.nextStall.name}</h3>
                                <ArrowForward style={{ color: "#FAFAFA", alignSelf: 'center', marginLeft: 10 }} />
                            </Button> : <Button color="inherit" variant="contained" style={{ padding: 10, flex: 1, backgroundColor: "#35b8be", marginLeft: 10, display: 'flex', flexDirection: "row", marginRight: 10 }}>
                                <h3 style={{ margin: 0, color: "#FAFAFA", textAlign: "center" }}>Payer</h3>
                                <CreditCard style={{ color: "#FAFAFA", alignSelf: 'center', marginLeft: 10 }} />
                            </Button>
                        }
                    </div>
                </div>
                <div></div>
                <div style={{ display: "flex", flexDirection: 'row', width:"100%", justifyContent:"space-around" }}>
                    {articles}
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