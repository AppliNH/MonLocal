import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette:{
    primary:{
      main: "#35b8be"
    }
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: "bold",
        backgroundColor: "red",
        margin: "10px",
        "&:hover": {
          backgroundColor: "green"
        }
      }
    },
    MuiBottomNavigationAction: {
      root: {
        color: "#212121"
      }
    }

  }
});