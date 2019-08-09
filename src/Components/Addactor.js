import React from 'react';

const Addactor = props => {

    const {firstName,secondName,gender,image} = props.actor;
    const {inputHandler,submitActor,close} = props;

    return (
        <div className="add-actor">
            <div className="add-actor-form">
                <div className="close-x" onClick={close}>x</div>
                <form onSubmit={submitActor}>
                    <div className="first-name">
                        <input 
                        placeholder="first name" 
                        value={firstName} name="firstName"
                        onChange={inputHandler} 
                        type="text"/></div>
                    <div className="second-name">
                        <input placeholder="second name" 
                        value={secondName} 
                        name="secondName" 
                        onChange={inputHandler} 
                        type="text"/></div>
                    <div className="gender">
                        <input placeholder="gender" 
                        value={gender} name="gender" 
                        onChange={inputHandler} 
                        type="text"/></div>
                    <div>
                        <textarea onChange={inputHandler} 
                        placeholder="img url" 
                        name="image" 
                        value={image}></textarea></div>
                    <div>
                        <button type="submit">Add Actor</button></div>
                </form>
            </div>
        </div>
    )
}
export default Addactor;