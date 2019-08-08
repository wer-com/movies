import {useState} from 'react';
import axios from 'axios';

const useMovies = () => {

    const moviesUrl = 'http://localhost:3100/movie';
    const [movies,setMovies] = useState([]);

    const getMovies = () =>{
        axios
        .get(moviesUrl)
        .then(res=>setMovies(res.data))
        .catch(err=>console.error(err));
    }

    const deleteMovies = id =>{
        axios
        .delete(moviesUrl+`/${id}`)
        .then(()=>getMovies())
        .catch(err=>console.error(err));
    }

    return[
        movies,
        getMovies,
        deleteMovies
    ]
}

export default useMovies;