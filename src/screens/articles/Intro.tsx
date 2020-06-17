import React, { Component } from 'react'
import FishMan from "../../assets/fishman.png"
import Chicken from "../../assets/chicken.png"
import MouseCursor from "../../assets/mousecursor.png"
import Finger from "../../assets/finger.png"
import { Card, Button } from '@material-ui/core'


interface IntroProps {
    nextStage: Function;
}

export default class Intro extends Component<IntroProps> {

    constructor(props: IntroProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <div style={{ display: "flex", flexDirection: "column", alignContent: 'center' }}>
                    <div style={{ textAlign: 'center', }}>
                        <h1 style={{ fontSize: "2em" }}>Bienvenue dans votre magasin personnalisé !</h1>
                        <h2>Nous allons ensemble passer de rayons en rayons afin de pouvoir sélectionner les articles que vous souhaitez acheter.</h2>
                    </div>
                    <div style={{ display: "flex", flexWrap: 'wrap', marginTop: 30, paddingLeft: 20, paddingRight: 20 }}>
                        <Card elevation={4} style={{ padding: 20, flex: 2, maxWidth: "45%" }}>
                            <div style={{ textAlign: 'center', }}>

                                <h2 style={{ fontSize: "1em" }}>Pour ajouter un article à votre panier ou voir les détails, positionnez votre souris sur l'article et cliquez avec le clic gauche</h2>
                            </div>
                            <div style={{ display: 'flex', flexDirection: "row" }}>
                                <div style={{ flex: 1 }}></div>
                                <div style={{ display: "flex" }}>
                                    <Card elevation={8} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img src={Chicken} style={{ height: 150, width: 200 }} />
                                        <h1 style={{ color: 'red' }}>Poulet</h1>
                                    </Card>

                                </div>
                                <div style={{ flex: 1, alignSelf: "flex-end" }}>
                                    <img src={MouseCursor} style={{ height: 100, width: 100 }} />
                                </div>
                            </div>

                        </Card>
                        <div style={{ flex: 1 }}></div>
                        <Card elevation={4} style={{ padding: 20, flex: 2, maxWidth: "45%" }}>
                            <div style={{ textAlign: 'center', }}>

                                <h2 style={{ fontSize: "1em" }}>Si vous êtes sur mobile ou tablette, vous avez juste à toucher l'article que vous désirez !</h2>
                            </div>
                            <div style={{ display: 'flex', flexDirection: "row" }}>
                                <div style={{ flex: 1 }}>

                                </div>
                                <div style={{ display: "flex" }}>
                                    <Card elevation={8} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img src={Chicken} style={{ height: 150, width: 200 }} />
                                        <h1 style={{ color: 'red' }}>Poulet</h1>
                                    </Card>

                                </div>
                                <div style={{ flex: 1, alignSelf: 'flex-end', padding: 10 }}>
                                    <img src={Finger} style={{ transform: "rotate(-45deg)", height: 200, width: 100 }} />
                                </div>
                            </div>

                        </Card>


                    </div>

                    <div style={{ textAlign: 'center', marginTop: 30 }}>
                        <h1 style={{ textAlign: 'center' }}>Avez-vous compris ?</h1>
                        <div>
                            <Button style={{ color: "white", backgroundColor: "red", fontSize: "1.5em" }} color="inherit" variant="contained">
                                NON
                            </Button>
                            <Button onClick={() => this.props.nextStage()}  style={{ color: "white", backgroundColor: "#35b8be", fontSize: "1.5em" }} color="inherit" variant="contained">
                                OUI
                            </Button>

                        </div>
                    </div>

                    {/* <img src={FishMan} style={{}} /> */}
                </div>
            </div>
        )
    }
}
