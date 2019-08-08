import {useState} from 'react';
import axios from 'axios';

const useActors = () => {

    const actorsUrl = 'http://localhost:3100/actor';
    const [actors,setActors] = useState([]);
    const getActors = () =>{
        axios
        .get(actorsUrl)
        .then(res=>setActors(res.data))
        .catch(err=>console.error(err));
    }

    const deleteActors = id =>{
        axios
        .delete(actorsUrl+`/${id}`)
        .then(()=>getActors())
        .catch(err=>console.error(err));
    }

    return[
        actors,
        getActors,
        deleteActors
    ]

}

export default useActors;