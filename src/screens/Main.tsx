import React from 'react'
import { Button, Card } from '@material-ui/core'
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MenuBook from '@material-ui/icons/MenuBook';
import { Link } from 'react-router-dom';
import { updateRoute } from "../redux/actions";
import { Component } from 'react';
import { connect } from 'react-redux';


interface MainProps {
  updateRoute: Function
}
class Main extends Component<MainProps> {

  constructor(props: MainProps) {
    super(props);
  }
  state = { width: 0, height: 0 };

  _updateRoute(path: string) {
    this.props.updateRoute(path)
  }


  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start",}}>
        <div style={{ backgroundColor: "rgba(0,0,0,0.05)", padding: 20, marginLeft: 10, marginTop: 10, flex: 2 }}>
          <h1 style={{ fontSize: "5vmax", color: "#FAFAFA" }}>Bienvenue dans MonLocal !</h1>
          <h1 style={{ color: "#FAFAFA" }}>Que voulez-vous faire aujourd'hui ?</h1>
        </div>
        <div style={{ display: 'flex', flex: 2, flexDirection: 'column', }}>

          <Link style={{ textDecoration: 'none' }} onClick={() => this._updateRoute("/articles")} to="/articles">
            <Button style={{ color: "white", backgroundColor: "#35b8be", fontSize: "4vmax" }} color="inherit" variant="contained">
              <ShoppingCart style={{ color: 'white', marginRight: 10, fontSize: "1em" }} />Aller Faire Mes Courses
          </Button>
          </Link>

          <Link style={{ textDecoration: 'none' }} onClick={() => this._updateRoute("/recipes")} to="/recipes">
            <Button style={{ color: "white", backgroundColor: "#35b8be", fontSize: "4vmax" }} color="inherit" variant="contained">
              <MenuBook style={{ color: 'white', marginRight: 10, fontSize: "1em" }} />Consulter Mes Recettes
            </Button>
          </Link>

        </div>
      </div>
    );
  }
}
export default connect(null, { updateRoute })(Main);
