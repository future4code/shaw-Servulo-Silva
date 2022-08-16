import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header";
import { goToFeed } from "../../Routes/coordinator";
import { CentralContainer, InitialPageContainer, MainContainerInitialPage } from "./styled";

const InitialPage = () => {
    const navigate = useNavigate()
    
    return (
        <MainContainerInitialPage>
            <Header/>
            <InitialPageContainer>
                <CentralContainer>
                    <Button onClick={()=>goToFeed(navigate)}>
                        Entrar no Morada do Conforto
                    </Button> 
                </CentralContainer>
             
            </InitialPageContainer>
           
        </MainContainerInitialPage>
    )
}
export default InitialPage