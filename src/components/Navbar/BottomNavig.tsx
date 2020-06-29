import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import MenuBook from '@material-ui/icons/MenuBook';
import LocalMall from '@material-ui/icons/LocalMall';
import { Link } from 'react-router-dom';
import { Component } from 'react'
import { connect } from "react-redux";
import { updateRoute } from "../../redux/actions";
import { Card } from '@material-ui/core';

interface BottomNavigProps {
  route: string
  updateRoute: Function
}
class BottomNavig extends Component<BottomNavigProps> {


  dispatchRoute(path: string) {
    this.props.updateRoute(path);
  }

  render() {
    return (
      <Card>
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
            onClick={() => this.dispatchRoute("/")}
            value="/" label="Accueil" icon={<HomeIcon />} />
          <BottomNavigationAction component={Link}
            to="/articles"
            onClick={() => this.dispatchRoute("/articles")}
            value={"/articles" || "/articles/pay"} label={<p style={{ margin: 0, padding: 0, textAlign: 'center' }}>Échoppes</p>} icon={<LocalMall />} />
          <BottomNavigationAction component={Link}
            to="/recipes"
            onClick={() => this.dispatchRoute("/recipes")}
            value="/recipes" label="Recettes" icon={<MenuBook />} />
        </BottomNavigation>
      </Card>
    )
  }
};
const mapStateToProps = (state: any) => {
  return {
    route: state.data.route
  }
}

export default connect(mapStateToProps, { updateRoute })(BottomNavig);
