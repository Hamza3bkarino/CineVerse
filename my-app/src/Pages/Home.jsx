import { useEffect, useState } from "react";
import { categories, movies, topMovies } from "../data/movies";

export default function Home (){
    const [ init , setInit ] =useState(0);
    const [curentSlide,setCurentSlide]=useState(0)
    const images= [ 
        '../public/WallpaperDog-10915418.jpg',
        '../public/WallpaperDog-10915324.jpg'
    ]

    useEffect (()=>{
        const interval = setInterval (()=>{
            setInit((prev) => 
                prev < images.length -1 ? prev + 1 : 0
              );
              
        },10000)
        return ()=> clearInterval(interval)
    },[])



    const nextSlide = () => {
        setCurentSlide((prev) => (prev + 1) % categories.length);
      };
    
      const prevSlide = () => {
        setCurentSlide((prev) =>
          prev === 0 ? categories.length - 1 : prev - 1
        );
      };



    return(
        <>
        
            <section className="HeroSectionHome" style={{  backgroundImage:`url('../public/${images[init]}')`, transition:'0.5s'}}>
                <div className="heroContent">
                    <h1>CineVerse – Where Stories Come Alive</h1>            
                    <button>
                        Discover Movies
                    </button>
                </div>
            </section>

            <section className="topMoviesSection">

                    <div className="titleTopMovieSection">
                        <h1>Top Movies :</h1>
                        <svg
                            viewBox="0 0 1440 20"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            style={{     
                                display: 'block',
                                width: '60%',
                                height: '40px',
                                marginTop: '28px',
                            }}
                            >
                            <path
                                d="M0 10 
                                Q 180 0 360 10 
                                T 720 10 
                                T 1080 10 
                                T 1440 10"
                                fill="transparent"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                        </svg>

                        <img src="./theater.png" alt="" width={`60px`} height={`60px`}/>


                    </div>


                <div className="movies-grid ">
                {

                    topMovies.map((item,index)=>(
                        <div className="movie-card" key={index}>
                            <img src={item.img} alt={item.title} />
                            <div className="movie-info">
                                <h3>{item.title}</h3>
                                <p>{item.year}</p>
                            </div>
                        </div>
                    ))
                }
                </div>


            </section>




            <section className="moviesSection" >

                <div className="titleMovieSection">
                    <h1>Movies :</h1>
                    <svg
                        viewBox="0 0 1440 20"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        style={{     
                            display: 'block',
                            width: '60%',
                            height: '40px',
                            marginTop: '28px',
                        }}
                        >
                        <path
                            d="M0 10 
                            Q 180 0 360 10 
                            T 720 10 
                            T 1080 10 
                            T 1440 10"
                            fill="transparent"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                    </svg>





                    <img src="./theater.png" alt="" width={`60px`} height={`60px`}/>
                </div>

                <div className="movies-grid">
                    {movies.map((item, index) => (
                    <div className="movie-card" key={index}>
                        <img src={item.img} alt={item.title} />
                        <div className="movie-info">
                        <h3>{item.title}</h3>
                        <p>{item.year}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </section>

            <section className="SliderSectionCategorie">
                <h1>Categories :</h1>

                <div className="sliderWrapper" >
                    <div className="sliderFlex" style={{transform:`translateX(-${curentSlide * 100 }%)`}}>
                        {categories.map((item, index) => (
                            <div key={index} className="categorieContainer" style={{ backgroundImage:`url(${item.img})` }}>
                                <div className="content">
                                    <p>{item.desc}</p>
                                    <button>{item.name}</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Arrows OUTSIDE, centered */}
                    <div className="controls">
                        <button onClick={prevSlide} className="ctrlBtn">‹</button>
                        <button onClick={nextSlide} className="ctrlBtn">›</button>
                    </div>
                </div>
            </section>

        </>
    )
}