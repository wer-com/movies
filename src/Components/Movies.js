import React,{useEffect} from 'react'
import useMovies from '../hooks/useMovies';

const Movies = () => {

    const [movies,getMovies,deleteMovies] = useMovies();

    useEffect(()=>{
        getMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const moviesContent = movies?
    movies.map(({MovieID,name,year,category,image,duration,country},index)=>
    <div key={index} className="actor-container">
        <div className="index">{index+1}</div>
        <div className="image"><img className="actor-image" src={image} alt="avatar" /></div>
        <div className="fn">{name}({year}), {category}, {duration}, {country}</div>
        <div className="category"><i onClick={()=>deleteMovies(MovieID)} className="material-icons delete">delete</i></div>
        <div className="button"><button><span>SEE ROLES</span></button></div>
    </div>):'Something went wrong';

    return (
        <div className="movies-container">
           {moviesContent}
        </div>
    )
}
export default Movies;