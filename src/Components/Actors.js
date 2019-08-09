import React,{useEffect} from 'react';
import useActors from '../hooks/useActors';
import Addactor from './Addactor';
import useRoles from '../hooks/useRoles';

const Actors = () => {
    
    const [
        actors,
        getActors,
        deleteActors,
        addActor,
        isAddActor,
        actor,
        inputHandler,
        submitActor] = useActors();

    const {
        roles,
        getRoles,
        displayRole,
        isDisplayRole} = useRoles();

    useEffect(()=>{
        getActors();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const rolesContent =roles?roles.map(({role},index)=>
    <div key={index}>{role}</div>):'';

    const actorsContent = actors?
    actors.map(({ActorID,firstName,secondName,gender,image},index)=>
    <div key={index} className="actor-container">
        <div className="index">{index+1}</div>
        <div className="image"><img className="actor-image" src={image} alt="avatar" /></div>
        <div className="fn">{firstName} {secondName}</div>
        <div className="gender"><i onClick={()=>deleteActors(ActorID)} className="material-icons delete">delete</i></div>
        <div className="button"><button onClick={()=>getRoles(ActorID)}><span>SEE ROLES</span></button></div>
    </div>):'Something went wrong';

    const addActorContent= addActor?<Addactor 
        submitActor={submitActor} 
        actor={actor} 
        inputHandler={inputHandler} 
        close={isAddActor}/>:<div onClick={isAddActor} className="add-button">+</div>;
    
    return (
        <div className="actors-container">
            {actorsContent}
            {addActorContent}
            {displayRole?<div className="roles-container"><div onClick={isDisplayRole} className="x-button">x</div><div className="role">{rolesContent}</div></div>:''}
        </div>
    )
}
export default Actors;