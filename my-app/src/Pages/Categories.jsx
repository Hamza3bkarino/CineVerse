import { movies } from "../data/movies";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Categories(){


  const location = useLocation();

  useEffect(() => {
    // Run when URL changes (ex: #Adventure)
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {

        const top = el.getBoundingClientRect().top + window.scrollY ;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }
  }, [location]);



  // helper function to check if video is in viewport
  const handleScroll = () => {
    const Action = document.getElementById("Action");
    const Adventure = document.getElementById("Adventure");
    const Drama = document.getElementById("Drama");
  
    // Action Action
    if (Action) {
      const rect = Action.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) Action.play();
      else Action.pause();
    }
  
    // Adventure video
    if (Adventure) {
      const rect = Adventure.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) Adventure.play();
      else Adventure.pause();
    }
    if (Drama) {
      const rect = Drama.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) Drama.play();
      else Drama.pause();
    }
  };
  

  // attach scroll listener
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }


  return(
    <>
      <section className="ActionCategorie " >
        <video 
          id="Action"
          src="/extraction.mp4"  // make sure file name is simple
          width="100%" 
          autoPlay
          muted={false}          // will attempt to play sound, browser may block
          loop
          onLoadedMetadata={(e) => {
            e.target.volume = 0.2;
          }}
        />
        <div className="vdBG"></div>
        <h1>
          Action Movies
        </h1>
        <div className="ActionMovies">
          <div className="movies-grid">
            {movies.map((item,index)=>(item.categorie === 'Action' ?
              <div className="movie-card" key={index}>
                <img src={item.img} alt={item.title} loading="eager"/>
                <div className="movie-info">
                  <h3>{item.title}</h3>
                  <p>{item.year}</p>
                </div>
              </div>
            : null))}
          </div>
        </div>
      </section>
      <br />


      <section className="AdventureCategorie " >
                <video 
                    id="Adventure"
                    src="/AdventureTriller.mp4" 
                    width={`100%`} 
                    autoPlay
                    loop          // manual loop
                
                    // lower volume
                    onLoadedMetadata={(e) => {
                      e.target.volume = 0.2;
                    }}
                
                
            />
                <div className="vdBG"></div>
                <h1>
                    Adventure Movies
                </h1>
                <div className="AdventureMovies">
                    <div className="movies-grid">
                        {movies.map((item,index)=>(
                            item.categorie === 'Adventure' ?
                            <div className="movie-card" key={index}>
                                <img src={item.img} alt={item.title} />
                                <div className="movie-info">
                                    <h3>{item.title}</h3>
                                <p>{item.year}</p>
                                </div>
                            </div>
                            :
                            ''
                        ))}
                    </div>
                </div>
                
                    
            </section> 
            <section className="DramaCategorie " >
                <video 
                    id="Drama"
                    src="/DramaTriller.mp4" 
                    width={`100%`} 
                    autoPlay
                    loop          // manual loop
                
                    // lower volume
                    onLoadedMetadata={(e) => {
                      e.target.volume = 0.2;
                    }}
                
                
                />
                <div className="vdBG"></div>
                <h1>
                    Drama Movies
                </h1>
                <div className="DramaMovies">
                    <div className="movies-grid">
                        {movies.map((item,index)=>(
                            item.categorie === 'Drama' ?
                            <div className="movie-card" key={index}>
                                <img src={item.img} alt={item.title} />
                                <div className="movie-info">
                                    <h3>{item.title}</h3>
                                <p>{item.year}</p>
                                </div>
                            </div>
                            :
                            ''
                        ))}
                    </div>
                </div>
                
                    
            </section> 

    </>
  )
}


 
            // public/Extraction ｜ Official Trailer ｜ Screenplay by JOE RUSSO Directed by SAM HARGRAVE ｜ Netflix.mp4