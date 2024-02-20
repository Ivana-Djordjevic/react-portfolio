//A single `Navigation` component within the header that will use `Link` components from `react-router-dom` to conditionally render the different sections of your portfolio

import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div className='navigation display-flex'>
            <Link to='/'> About Me </Link>
            <Link to='/portfolio'> Portfolio </Link>
            <Link to='/contact'> Contact </Link>
            <Link to='/resume'> Resume </Link>
        </div>
    );
}