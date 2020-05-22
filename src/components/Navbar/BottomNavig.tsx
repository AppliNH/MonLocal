import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MenuBook from '@material-ui/icons/MenuBook';



export default function SimpleBottomNavigation() {

  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
    style={{ width: '100%',position: 'fixed',bottom: 0}}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    
    >
      <BottomNavigationAction label="Accueil" icon={<HomeIcon />} />
      <BottomNavigationAction label="Faire mes courses" icon={<ShoppingCart />} />
      <BottomNavigationAction label="Recettes" icon={<MenuBook />} />
    </BottomNavigation>
  );
}