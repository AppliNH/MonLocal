import React, { Component } from 'react'
import Chicken from "../../assets/chicken.png"
import MouseCursor from "../../assets/mousecursor.png"
import Mouse from "../../assets/mouse.png"
import fingerUpDown from "../../assets/fingerUpDown.png"
import Finger from "../../assets/finger.png"
import { Card, Button } from '@material-ui/core'


interface IntroProps {
    nextStage: Function;
}

export default class Intro extends Component<IntroProps> {


    render() {
        return (
            <div style={{ marginBottom: "10vh" }}>
                <div style={{ display: "flex", flexDirection: "column", alignContent: 'center' }}>
                    <div style={{ textAlign: 'center', }}>
                        <h1 style={{ margin: 0, marginTop: 10, marginBottom: 10, fontSize: "3.5vmax", color: "#FAFAFA" }}>Bienvenue dans votre magasin personnalisé !</h1>
                        <Card style={{ padding: 20, margin: 10 }}>
                            <h3>Nous allons ensemble passer d'échoppe en échoppe afin de pouvoir sélectionner les articles que vous souhaitez acheter.</h3>
                        </Card>
                    </div>
                    <div style={{ display: "flex", flexWrap: 'wrap', marginTop: 10 }}>

                        <Card elevation={4} style={{ padding: 20, flex: 1, margin: 10, minWidth: "45%" }}>

                            <div style={{ display: 'flex', flexDirection: "row" }}>

                                <div style={{ flex: 1 }}>

                                </div>
                                <Card elevation={8} style={{ flex: 1, flexWrap: "wrap", display: "flex", justifyContent: "center" }}>
                                    <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                                        <img alt="poulet" src={Chicken} style={{ height: "7vmax", width: "9vmax" }} />
                                        <h3 style={{ color: 'red', textAlign: 'center' }}>Poulet</h3>
                                    </div>
                                    <Button style={{ backgroundColor: "#35b8be", color: "#FAFAFA" }}>
                                        Voir
                                    </Button>
                                </Card>


                                <div style={{ flex: 1, alignSelf: "flex-end", padding: 10 }}>
                                    <img alt="pointeur" src={MouseCursor} style={{ height: "5vmax", width: "5vmax" }} />
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <h3>Pour ajouter un article à votre panier ou voir les détails, positionnez votre souris sur l'article et cliquez avec le clic gauche sur le bouton "Voir"</h3>
                            </div>
                        </Card>

                        <Card elevation={4} style={{ padding: 20, flex: 1, margin: 10, minWidth: "45%" }}>

                            <div style={{ display: 'flex', flexDirection: "row" }}>
                                <div style={{ flex: 1 }}>

                                </div>

                                <Card elevation={8} style={{ flex: 1, flexWrap: "wrap", display: "flex", justifyContent: "center" }}>
                                    <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                                        <img alt="poulet" src={Chicken} style={{ height: "7vmax", width: "9vmax" }} />
                                        <h3 style={{ color: 'red', textAlign: 'center' }}>Poulet</h3>
                                    </div>
                                    <Button style={{ backgroundColor: "#35b8be", color: "#FAFAFA" }}>
                                        Voir
                                    </Button>
                                </Card>

                                <div style={{ flex: 1, alignSelf: 'flex-end', padding: 10 }}>
                                    <img alt="doigt" src={Finger} style={{ transform: "rotate(-45deg)", height: "6vmax", width: "3vmax" }} />
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', }}>
                                <h3>Si vous êtes sur mobile ou tablette, vous avez juste à toucher le bouton "Voir" de l'article que vous désirez !</h3>
                            </div>
                        </Card>

                        <Card elevation={4} style={{ padding: 20, flex: 1, margin: 10, minWidth: "45%", display: "flex", flexDirection: "column", alignItems: "center" }}>

        
                            <div style={{ textAlign: 'center', }}>
                                <h3>Pour faire défiler la liste des articles, vous pouvez utiliser votre molette si vous êtes sur ordinateur, et glisser sur les articles avec votre doigt si vous êtes sur mobile ou tablette.</h3>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15 }}>
                                <img alt="souris" src={Mouse} style={{ height: "7vmax", width: "9vmax" }} />
                                <h3 style={{ marginLeft: 10, marginRight: 20 }} >OU</h3>
                                <img alt="doigt haut et bas" src={fingerUpDown} style={{ height: "7vmax", width: "9vmax" }} />
                            </div>
                        </Card>

                        


                    </div>

                    <div style={{ textAlign: 'center', marginTop: 10 }}>
                        <h1 style={{ textAlign: 'center', color: "#FAFAFA" }}>Avez-vous compris ?</h1>
                        <div>
                            <Button style={{ color: "white", backgroundColor: "red", fontSize: "1.5em" }} color="inherit" variant="contained">
                                NON
                            </Button>
                            <Button onClick={() => this.props.nextStage()} style={{ color: "white", backgroundColor: "#35b8be", fontSize: "1.5em" }} color="inherit" variant="contained">
                                OUI
                            </Button>

                        </div>
                    </div>

                    {/* <img src={FishMan} style={{}} /> */}
                </div>
            </div >
        )
    }
}
