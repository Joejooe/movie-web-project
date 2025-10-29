import MovieCard from "../components/movieCards.jsx";
import {useState, useEffect} from "react";
import {searchMovies, getMovies} from "../services/api.js";
import '../css/Home.css';

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMovies = async () => {
            try{
                const popularMovies = await getMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to fetch movies. Please try again later.");
            }
            finally{
                setLoading(false);
            };
        }   
        loadMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return;
        if(loading) return;

        setLoading(true);
        try{
            const searchResults = await searchMovies(searchQuery);
            console.log(searchResults);
            setMovies(searchResults);
            setError(null);
        }catch(err){
            console.log(err)
            setError("Failed to fetch search results. Please try again later.");
        }finally{
            setLoading(false);
        }
    };


    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? (<div className="loading">loading...</div>) : (<div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>)}
    </div>
}

export default Home;