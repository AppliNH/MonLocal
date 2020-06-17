import React from 'react'
import { Button } from '@material-ui/core'
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MenuBook from '@material-ui/icons/MenuBook';
import { Link } from 'react-router-dom';
import {updateRoute} from "../redux/actions";

import  { Component } from 'react';
import { connect } from 'react-redux';

interface MainProps {
  updateRoute: Function
}
class Main extends Component<MainProps> {

  constructor(props: MainProps) {
    super(props);
  }

  _updateRoute(path: string) {
    console.log("yooo this is "+path)
    this.props.updateRoute(path)
  }

  render() {
    return (
      <div className="App">
      <div>
        <h1 style={{ fontSize: "5em" }}>Bonjour !</h1>
        <h1>Que voulez-vous faire aujourd'hui ?</h1>
      </div>

      <Link style={{ textDecoration: 'none' }} onClick={()=>this._updateRoute("/articles")} to="/articles">
        <Button style={{ color: "white", backgroundColor: "#35b8be", fontSize: "1.5em" }} color="inherit" variant="contained">
          <ShoppingCart style={{ color: 'white', marginRight: 10 }} />Faire Mes Courses
      </Button></Link>
      <Link style={{ textDecoration: 'none' }} onClick={()=>this._updateRoute("/recipes")} to="/recipes">
        <Button style={{ color: "white", backgroundColor: "#35b8be", fontSize: "1.5em" }} color="inherit" variant="contained">
          <MenuBook style={{ color: 'white', marginRight: 10 }} />Consulter Mes Recettes
        </Button>
      </Link>

    </div>
    );
  }
}
export default connect(null,{ updateRoute })(Main);
