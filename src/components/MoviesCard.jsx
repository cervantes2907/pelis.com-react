import { Link } from 'react-router-dom';
import styles from './MoviesCard.module.css'
import { getMovieImg } from "../utils/getMovieImg";


export function MoviesCard ({movie}) {
    const imageUrl = getMovieImg(movie.poster_path, 300);
    return (
          <li className={styles.cardMovies}>
              <Link to={"/Movies/" + movie.id}>
           <img 
           width={230}
           heidht={345}
           className={styles.imageMovies} 
           src={imageUrl} 
           alt={movie.title}
            />
           <div>{movie.title}</div>
           </Link>
           </li>
       );
}
