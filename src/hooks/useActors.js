import {useState} from 'react';
import axios from 'axios';

const useActors = () => {

    const actorsUrl = 'http://localhost:3100/actor';
    const [actors,setActors] = useState([]);
    const [addActor,setAddActor] = useState(false); 
    
    const [actor,setActor] = useState({
        firstName:'',
        secondName:'',
        gender:'',
        image:''
    });

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

    const isAddActor = () =>{
        setAddActor(!addActor)
    }

    const inputHandler = e =>{
        setActor({...actor,[e.target.name]:e.target.value});
    }

    const submitActor = e =>{
        e.preventDefault();
        const {firstName,secondName,gender,image} = actor;
        console.log(actor)
        const submitActor = {firstName,secondName,gender,image};
        axios
          .post(actorsUrl+`/add`, submitActor)
          .then(()=>getActors())
          .catch(err => {console.error(err);});
    }

    return[
        actors,
        getActors,
        deleteActors,
        addActor,
        isAddActor,
        actor,
        inputHandler,
        submitActor
    ]

}

export default useActors;