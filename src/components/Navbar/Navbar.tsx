import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Theme, createStyles, makeStyles, Icon, Box } from '@material-ui/core';
import LocalMall from '@material-ui/icons/LocalMall';
class Navbar extends Component {
    render() {
        return (
            <AppBar elevation={2} style={{ backgroundColor: "#35b8be" }} position="static">
                <Toolbar>
                    <Box display="flex" justifyContent="center" flexDirection="row">
                        <LocalMall style={{ alignSelf: "center",marginRight:5 }} />
                        <Typography variant="h6" >MonLocal</Typography>
                    </Box>
                    {/* <div style={{ marginLeft: "auto" }}>
                        <Button style={{ marginRight: 5, backgroundColor: "#35b8be" }} color="inherit" variant="contained" >Accueil</Button>
                        <Button style={{ marginRight: 5, backgroundColor: "#35b8be" }} color="inherit" variant="contained" >Faire mes courses</Button>
                        <Button style={{ marginRight: 5, backgroundColor: "#35b8be" }} color="inherit" variant="contained">Recettes</Button>
                    </div> */}
                </Toolbar>
            </AppBar>
        );
    }
}

export default Navbar;