import React,{useEffect} from 'react';
import useActors from '../hooks/useActors';

const Actors = () => {
    
    const [actors,getActors,deleteActors] = useActors();

    useEffect(()=>{
        getActors();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const actorsContent = actors?
    actors.map(({ActorID,firstName,secondName,gender,image},index)=>
    <div key={index} className="actor-container">
        <div className="index">{index+1}</div>
        <div className="image"><img className="actor-image" src={image} alt="avatar" /></div>
        <div className="fn">{firstName} {secondName}</div>
        <div className="gender"><i onClick={()=>deleteActors(ActorID)} className="material-icons delete">delete</i></div>
        <div className="button"><button ><span>SEE ROLES</span></button></div>
    </div>):'Something went wrong';

    return (
        <div className="actors-container">
            {actorsContent}
        </div>
    )
}
export default Actors;