import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderContainer } from "./styled";
import { useNavigate } from "react-router-dom"
import { goToInitialPage } from "../../Routes/coordinator";

const Header = () => {

  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography 
          margin={"auto"}
          variant="h6" 
          color="white" 
          component="div"
          onClick={()=>goToInitialPage(navigate)}
          textAlign="center"
          marginTop="6px"
          >
            Morada do Conforto<br></br>
            <span><i>Compartilhe aqui seus sentimentos e reflexões</i></span>
          </Typography>
        </Toolbar>
      </AppBar>
    </HeaderContainer>
  );
};

export default Header;
