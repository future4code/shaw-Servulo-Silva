import axios from "axios";
import {BASE_URL} from "../constants/urls"
import {goToFeedPage} from "../routes/coordinator"




export const login = (body, clear, navigate) => {
     
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res)=>{
        console.log(res)
        localStorage.setItem("token", res.data.token)
        goToFeedPage(navigate)
    })
       
    .catch((err)=>{
        alert(err);
    })
}