import React from 'react';

import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {

    const location = useLocation();

    return (
        <div className="navigation display-flex padding" >
            <Link to="/"
                  className={location.pathname === '/' ? 'active' : ''}> 
                About Me 
            </Link>
            <Link to="/portfolio" 
                  className={location.pathname === '/portfolio' ? 'active' : ''}> 
                Portfolio 
            </Link>
            <Link to="/contact" 
                  className={location.pathname === '/contact' ? 'active' : ''}> 
                Contact 
            </Link>
            <Link to="/resume" 
                  className={location.pathname === '/resume' ? 'active' : ''}> 
                Resume 
            </Link>
        </div>
    );
}