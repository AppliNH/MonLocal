import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Theme, createStyles, makeStyles, Icon, Box } from '@material-ui/core';
import LocalMall from '@material-ui/icons/LocalMall';

import { withRouter } from "react-router";
import { Redirect, Link } from "react-router-dom";

class Navbar extends React.Component {

    redirectTo(path: string) {
        return <Redirect to={path}/>
    }

    render() {
        return (
            <AppBar elevation={2} style={{ backgroundColor: "#35b8be" }} position="static">
                <Toolbar>
                    <Box display="flex" justifyContent="center" flexDirection="row">
                        <LocalMall style={{ color:"white", alignSelf: "center",marginRight:5 }} />
                        <Typography style={{ color:"white"}} variant="h6" >MonLocal</Typography>
                    </Box>
                    <div style={{ marginLeft: "auto" }}>
                        <Link  style={{ textDecoration: 'none' }} to="/"><Button style={{ color:"white",marginRight: 5, backgroundColor: "#35b8be" }} color="inherit" variant="contained" >Accueil</Button></Link>
                        <Link  style={{ textDecoration: 'none' }} to="/articles"><Button style={{ color:"white",marginRight: 5, backgroundColor: "#35b8be" }} color="inherit" variant="contained" >Faire mes courses</Button></Link>
                        <Link  style={{ textDecoration: 'none' }} to="/recipes"><Button style={{ color:"white",marginRight: 5, backgroundColor: "#35b8be" }} color="inherit" variant="contained">Recettes</Button></Link>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Navbar