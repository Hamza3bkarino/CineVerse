import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../components/NavBar.css'

export default function NavBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate()


  const handleClick = ()=>{

    navigate(`search-result?query=${encodeURIComponent(search)}`)
    setShowSearch(false)

  }


  return (
    <nav>
      <Link to={'/'}>
        <h1>CineVerse</h1>
      </Link>
      <ul>
        <li>
          {/* Search icon */}
          {!showSearch && (
            <span 
              className="search-icon" 
              onClick={() => setShowSearch(true)}
            >
              <img src="../public/search.png" alt="" srcset="" width={`30px`}/>
            </span>
          )}

          {/* Search input appears when clicked */}
          {showSearch && (
            <>

              <div className="search-box" >
                <input
                  type="text"
                  placeholder="Search..."
                  autoFocus
                  value={search}
                  className="search-input"
                  onBlur={()=>
                    setTimeout(() => {
                      if (!document.activeElement.closest(".search-box")) {
                        setShowSearch(false);
                      }
                    }, 0)
                  }
                  onChange={(e)=>setSearch(e.target.value)}
                  
                />
                <button onClick={handleClick} id="searchBtn">
                  search
                </button>
              </div>
            </>
          )}
        </li>

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
