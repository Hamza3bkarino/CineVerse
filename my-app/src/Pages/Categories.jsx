import { movies } from "../data/movies";


export default function Categories(){

  // helper function to check if video is in viewport
  const handleScroll = () => {
    const video = document.getElementById("myVideo");
    const adventureVideo = document.getElementById("adventureVideo");
  
    // Action video
    if (video) {
      const rect = video.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) video.play();
      else video.pause();
    }
  
    // Adventure video
    if (adventureVideo) {
      const rect = adventureVideo.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) adventureVideo.play();
      else adventureVideo.pause();
    }
  };
  

  // attach scroll listener
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return(
    <>
      <section className="ActionCategorie">
        <video 
          id="myVideo"
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
                <img src={item.img} alt={item.title} />
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


      <section className="AdventureCategorie">
                <video 
                    id="adventureVideo"
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
            <section className="DramaCategorie">
                <video 
                    id="dramaVideo"
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