import { useState } from "react";
import { Link } from "react-router-dom";
import '../components/NavBar.css'

export default function NavBar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav>
      <h1>CineVerse</h1>
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
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              className="search-input"
              onBlur={() => setShowSearch(false)} // hide on click outside
            />
          )}
        </li>

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
