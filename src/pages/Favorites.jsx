import '../css/Favorites.css';
import { useMovieContext } from '../context/MovieContext';
import MovieCards from '../components/movieCards';

function Favorites(){
    const {favorites} = useMovieContext();
    if(favorites){
        return (
            <div className="favorites">
                <h2>Your Favorite Movies</h2>
                <div className="movie-grid">
                    {favorites.map((movie) => (
                        <MovieCards movie={movie} key={movie.id}/>
                    ))}
            </div>
        </div>
        )
    }
    
    return <div className="favorites-empty">
        <h2>Your Favorites List is Empty.</h2>
        <p>Add movies to your favorites to see them here.</p>
    </div>
}

export default Favorites;