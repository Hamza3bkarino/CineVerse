import { useEffect , useState } from "react"
import { movies } from "../data/movies";
import { useLocation, useNavigate } from "react-router-dom";


export default function Results(){
  const [results, setResults] = useState([]);
  const location = useLocation();   
  const navigate = useNavigate();


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query");

    if (query) {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [location.search]);


  const handleClickMovies = (id) =>{
    console.log('goood');
    
    navigate(`/Movie-Details/${id}`)
  }

    return(
        <>
        <div className="result">
            <h1>Search Results</h1>
            {results.length === 0 && <p>No movies found</p>}
            
            <div className="movies-grid ">
                 {  
                     results.map((item,index)=>(
                         <div className="movie-card" key={index} onClick={()=>handleClickMovies(item.id)}>
                             <img src={item.img} alt={item.title} />
                             <div className="movie-info">
                                 <h3>{item.title}</h3>
                                 <p>{item.year}</p>
                             </div>
                         </div>
                     ))
                 }
             </div>
        </div>

        </>
    )
}