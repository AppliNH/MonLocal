import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MenuBook from '@material-ui/icons/MenuBook';
import { Link } from 'react-router-dom';
import { Component } from 'react'
import { connect } from "react-redux";
import {updateRoute} from "../../redux/actions";

interface BottomNavigProps {
  route: string
  updateRoute: Function
}
class BottomNavig extends Component<BottomNavigProps> {

  constructor(props: BottomNavigProps) {
    super(props);
  }
  componentDidUpdate() {
    console.log(this.props.route);
    
  }

  dispatchRoute(path: string) {
    this.props.updateRoute(path);
  }

  render() {
    return (
      <BottomNavigation
        style={{ width: '100%', position: 'fixed', bottom: 0 }}
        value={this.props.route}
        onChange={(event, newValue) => {
          this.dispatchRoute(newValue)
          //this.setState({ value: newValue });
        }}
        showLabels>
        <BottomNavigationAction component={Link}
          to="/"
          onClick={()=>this.dispatchRoute("/")}
          value="/" label="Accueil" icon={<HomeIcon />} />
        <BottomNavigationAction component={Link}
          to="/articles"
          onClick={()=>this.dispatchRoute("/articles")}
          value="/articles" label={<p style={{margin:0,padding:0,textAlign:'center'}}>Faire Mes Courses</p>} icon={<ShoppingCart />} />
        <BottomNavigationAction component={Link}
          to="/recipes"
          onClick={()=>this.dispatchRoute("/recipes")}
          value="/recipes" label="Recettes" icon={<MenuBook />} />
      </BottomNavigation>
    )
  }
};
const mapStateToProps = (state:any) => {
  return {
    route: state.data.route
  }
}

export default connect(mapStateToProps,{ updateRoute })(BottomNavig);
