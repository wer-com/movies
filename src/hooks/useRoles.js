import {useState} from 'react';
import axios from 'axios';

const useRoles = () =>{

    const rolesUrl = 'http://localhost:3100/cast/actor/';
    const castUrl = 'http://localhost:3100/cast/movie/';
    const [roles,setRoles] = useState([]);
    const [cast,setCast] = useState([]);
    const [displayRole,setDisplayRole] = useState(false);
    const [displayCast,setDisplayCast] = useState(false);  

    const isDisplayCast = () =>{
        setDisplayCast(!displayCast);
    }

    const isDisplayRole = () =>{
        setDisplayRole(!displayRole);
    }

    const getRoles = id =>{
        axios
        .get(rolesUrl+id)
        .then(res=>setRoles(res.data))
        .then(()=>setDisplayRole(true))
        .catch(err=>console.error(err));
    }

    const getCast = id =>{
        axios
        .get(castUrl+id)
        .then(res=>setCast(res.data))
        .then(()=>setDisplayCast(true))
        .catch(err=>console.error(err));
    }


    return{
        roles,
        cast,
        getRoles,
        getCast,
        displayRole,
        isDisplayRole,
        isDisplayCast
    }
}

export default useRoles;