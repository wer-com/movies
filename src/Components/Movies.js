import React,{useEffect} from 'react'
import useMovies from '../hooks/useMovies';
import useRoles from '../hooks/useRoles';

const Movies = () => {

    const [movies,getMovies,deleteMovies] = useMovies();

    const {
        cast,
        getCast,
        displayCast,
        isDisplayCast} = useRoles();

    useEffect(()=>{
        getMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const castContent =cast?cast.map(({role},index)=>
    <div key={index}>{role}</div>):'';

    const moviesContent = movies?
    movies.map(({MovieID,name,year,category,image,duration,country},index)=>
    <div key={index} className="actor-container">
        <div className="index">{index+1}</div>
        <div className="image"><img className="actor-image" src={image} alt="avatar" /></div>
        <div className="fn">{name}({year}), {category}, {duration}, {country}</div>
        <div className="category"><i onClick={()=>deleteMovies(MovieID)} className="material-icons delete">delete</i></div>
        <div className="button"><button onClick={()=>getCast(MovieID)}><span>SEE CAST</span></button></div>
    </div>):'Something went wrong';
    return (
        <div className="movies-container">
           {moviesContent}
           {displayCast?<div className="roles-container"><div onClick={isDisplayCast} className="x-button">x</div><div className="role">{castContent}</div></div>:''}
        </div>
    )
}
export default Movies;