
import {useEffect, useState} from 'react';
import {useParams} from "react-router"
import Spinsner from '../components/Spinner';
import { get } from '../utils/Api';
import { getMovieImg } from '../utils/getMovieImg';
import styles from './MoviesDetails.module.css'

export const MoviesDetails = () => {
    const { movieId } = useParams ();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);


    useEffect(() => {
        setIsLoading(true);

    get("/movie/" + movieId).then(data => {
        setMovie(data);
        setIsLoading(false);
    })
        
    }, [movieId]);

    if (isLoading) {
        return <Spinsner />;
    }

    const imageUrl = getMovieImg(movie.poster_path, 500);

    return (
        <div className={styles.detailContainer}>
            <img
               className={`${styles.col} ${styles.movieimage}`} 
               src={imageUrl} 
               alt={movie.title}
            />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}>
                    <strong>Title:</strong>{movie.title}
                </p>
                <p>
                 <strong>Genres:</strong>{" "}
                  {movie.genres.map(genre => genre.name).join(", ")}
                </p>
                <p><strong>Description:</strong> {movie.overview}</p>
            </div>
         </div>
    )
}
