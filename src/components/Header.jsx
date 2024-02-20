// A single `Header` component that appears on multiple pages

import Navigation from './Navigation'

export default function Header() {
    return (
        <header className='border-style'> 
            <h1>Ivana</h1>
            < Navigation />
        </header>
    )
}