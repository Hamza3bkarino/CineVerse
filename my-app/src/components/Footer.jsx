import "./Footer.css";

export default function Footer() {
  return (
    <footer className={'footer'}>
      <div className={'container'}> 

        {/* Brand */}
        <div className={'section brand-section'}>
          <h2 className={'logo'}>CineVerse</h2>
          <p className={'text'}>
            Dive into the universe of cinema — explore categories, discover films,
            and enjoy timeless classics.
          </p>

          <div className={'socials'}>
            {/* Social Media Icons - assuming Font Awesome or similar classes */}
            <a href="#" aria-label="Facebook">
                <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07C2 17.1 5.66 21.22 10.44 22v-7.02H7.9v-2.91h2.54V9.67c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22C18.34 21.22 22 17.1 22 12.07z"/>
                </svg>

            </a>
            <a href="#" aria-label="Twitter">
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M18.244 2H21.5l-7.6 8.65L22 22h-6.01l-4.72-6.12L5.8 22H2.5l8.15-9.27L2 2h6.14l4.33 5.82L18.24 2zm-.92 18h1.71L7.05 4h-1.8l12.15 16z"/>
            </svg>

            </a>
            <a href="#" aria-label="Instagram">
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.75-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
            </svg>

            </a>
          </div>
        </div>

        {/* Pages */}
        <div className={'section'}>
          <h3 className={'title'}>Pages</h3>
          <ul className={'links'}>
            <li><a href="/">Home</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Legal & Info */}
        <div className={'section'}>
          <h3 className={'title'}>Info</h3>
          <ul className={'links'}>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/sitemap">Sitemap</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={'section newsletter-section'}>
          <h3 className={'title'}>Join the CineVerse</h3>
          <p className={'text'}>Get updates on new releases and exclusive content.</p>

          <div className={'newsletter'}>
            <input type="email" placeholder="Your email address" aria-label="Your email address for newsletter" />
            <button className={'subscribe-btn'}>Subscribe</button>
          </div>
        </div>

      </div>

      <div className={'bottom'}>
        © {new Date().getFullYear()} CineVerse — All Rights Reserved.
      </div>
    </footer>
  );
}