import {jwtDecode} from "jwt-decode";

const storeToken = (token)=>{
    localStorage.setItem("token",token)
}

const checkToken = ()=>{
    const token = localStorage.getItem("token");
    if(token){
        return true;
    }else return false;
}

const getToken = ()=>{
    const token= localStorage.getItem("token")
    return token;
}
const deleteToken = ()=>{
    localStorage.removeItem("token")
}

export {storeToken,checkToken,getToken,deleteToken}