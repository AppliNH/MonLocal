import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MenuBook from '@material-ui/icons/MenuBook';
import { Link } from 'react-router-dom';
import { Component } from 'react'

interface BottomNavigProps {
  currentRoute: string
}
export default class BottomNavig extends Component<BottomNavigProps> {

  constructor(props: BottomNavigProps) {
    super(props);
  }

  state = { value: this.props.currentRoute }


  render() {
    return (
      <BottomNavigation
        style={{ width: '100%', position: 'fixed', bottom: 0 }}
        value={this.state.value}
        onChange={(event, newValue) => {
          this.setState({ value: newValue });
        }}
        showLabels>
        <BottomNavigationAction component={Link}
          to="/"
          value="/" label="Accueil" icon={<HomeIcon />} />
        <BottomNavigationAction component={Link}
          to="/articles"
          value="/articles" label="Faire mes courses" icon={<ShoppingCart />} />
        <BottomNavigationAction component={Link}
          to="/recipes"
          value="/recipes" label="Recettes" icon={<MenuBook />} />
      </BottomNavigation>
    )
  }
}
