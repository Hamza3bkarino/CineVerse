import { useNavigate, useParams } from "react-router-dom";
import { topMovies } from "../data/movies";

export default function TopMovieDetails() {

    const { id } = useParams();
    const navigate = useNavigate();
    // better than filter
    const movie = topMovies.find(elm => elm.id === Number(id));

    if (!movie) {
        return <h2>Movie not found</h2>;
    }

    const background = '../../public/stranger-things-3840x2160-24522.jpg'
    

    return (
        <>
            <section 
                className="DetailsSection" 
                style={{ backgroundImage: `url(../../public/${background})` }}
            >
                <div className="movieDetails">
                    <div className="MovieImg">
                        <img src={movie.img} alt={movie.title} width="100%" height="350px" />
                        <p>{movie.rate}</p>
                    </div>
                    <div className="movieData">
                        <h2>{movie.title}</h2>
                        <hr/>
                        <p>{movie.desc}</p>
                        <hr />
                        <p className="infoOfMovie">{movie.categorie}</p>
                        <p className="infoOfMovie">{movie.production} / {movie.year}</p>
                        <div className="moviesWatchBtn">
                            <button id="btnWatch" >
                                Watch Movie
                            </button>
                            <button id="btnReturn" onClick={() => navigate("/")}>
                                Return
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
