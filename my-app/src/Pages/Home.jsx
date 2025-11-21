import { useEffect, useState } from "react";
import { categories, movies, topMovies } from "../data/movies";
import { useNavigate } from "react-router-dom";
import PopUp from "../components/PopUp";

export default function Home(){

    const [ init , setInit ] =useState(0);
    const [curentSlide,setCurentSlide]=useState(0);
    const [isOpen,setIsOpen]=useState(false);
    const navigate= useNavigate()

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

    useEffect(() => {
        // Check if popup was already dismissed
        const popupDismissed = localStorage.getItem("popupDismissed");
    
        if (!popupDismissed) {
          const timer = setTimeout(() => {
            setIsOpen(true);
          }, 3000);
    
          return () => clearTimeout(timer);
        }
      }, []);
    
      const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem("popupDismissed", "true");
      };
    



    const nextSlide = () => {
        setCurentSlide((prev) => (prev + 1) % categories.length);
      };
    
      const prevSlide = () => {
        setCurentSlide((prev) =>
          prev === 0 ? categories.length - 1 : prev - 1
        );
      };

    const handleClickDiscover = ()=>{
        location.href='#DiscoverMenu'
    }
    const handleCategories = (value)=>{
        navigate(`/categories#${value}`)
    }

    const handleClickTopMovies = (id) =>{
        navigate(`/TopMovie-Details/${id}`)
    }

    const handleClickMovies = (id) =>{
        navigate(`/Movie-Details/${id}`)
    }

    return(
        <>
            {isOpen &&(

                <PopUp isOpen={isOpen} onClose={handleClose}/>
            
            )}
        
            <section className="HeroSectionHome" style={{  backgroundImage:`url('${images[init]}')`, transition:'0.5s'}}>
                <div className="heroContent">
                    <h1>CineVerse – Where Stories Come Alive</h1>            
                    <button onClick={handleClickDiscover}>
                        Discover Movies
                    </button>
                </div>
            </section>
            <div style={{position:'relative'}}>
                <svg viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="5" x2="120" y2="5" stroke="#1d78b5a1" strokeWidth="2"/>
                    <line x1="180" y1="5" x2="300" y2="5" stroke="#1d78b5a1" strokeWidth="2"/>
                </svg>


                <h1 className="section-title" style={{textAlign:'center', marginTop: '-47px',marginBottom: '76px'}}>Top Movies</h1>
            </div>
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
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>

                        <img src="./theater.png" alt="" width={`60px`} height={`60px`}/>


                    </div>


                <div className="movies-grid ">
                {

                    topMovies.map((item,index)=>(
                        <div className="movie-card" key={index} onClick={()=>handleClickTopMovies(item.id)}>
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
            <div style={{position:'relative'}}>
                <svg viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg" style={{position:'absolute'}}>
                    <line x1="0" y1="5" x2="120" y2="5" stroke="#1d78b5a1" strokeWidth="2"/>
                    <line x1="180" y1="5" x2="300" y2="5" stroke="#1d78b5a1" strokeWidth="2"/>
                </svg>
                
                <h1 className="section-title" style={{textAlign:'center', margin:'69px 0px -43px 0px',fontsize: '40px',fontWeight: '800'}}>All Movies</h1>
            </div>

            <section className="moviesSection" id="DiscoverMenu" >

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
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>





                    <img src="./theater.png" alt="" width={`60px`} height={`60px`}/>
                </div>

                <div className="movies-grid">
                    {movies.map((item, index) => (
                    <div className="movie-card" key={index} onClick={()=>handleClickMovies(item.id)}>
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
                <div style={{position:'relative'}}>
                    <svg viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="5" x2="120" y2="5" stroke="#1d78b5a1" strokeWidth="2"/>
                        <line x1="180" y1="5" x2="300" y2="5" stroke="#1d78b5a1" strokeWidth="2"/>
                    </svg>
                    <h1 className="section-title">Categories :</h1>
                </div>
                <div className="sliderWrapper" >
                    <div className="sliderFlex" style={{transform:`translateX(-${curentSlide * 100 }%)`}}>
                        {categories.map((item, index) => (
                            <div key={index} className="categorieContainer" style={{ backgroundImage:`url(${item.img})` }}>
                                <div className="content">
                                    <p>{item.desc}</p>
                                    <button onClick={()=>handleCategories(item.name)}>{item.name}</button>
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