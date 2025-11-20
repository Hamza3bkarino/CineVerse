import { useParams } from "react-router-dom"
import { movies } from "../data/movies";


export default function MovieDetails(){
    const {id} = useParams()


        const movie = movies.find(elm => elm.id === Number(id));
    
        if (!movie) {
            return <h2>Movie not found</h2>;
        }
    
        const background = '../../public/stranger-things-3840x2160-24522.jpg'


    return(
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
                        <p>{movie.desc}</p>
                        <p className="infoOfMovie">{movie.categorie}</p>
                        <p className="infoOfMovie">{movie.production} / {movie.year}</p>
                    </div>
                </div>
            </section>
        </>
    )
}