import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#7600D6"
    }

    return (
        <header>
            <Link className="site-logo" to='/'><img className='logo' src='/rose.png' /></Link>
            <nav>
                <NavLink 
                    to='/about'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to='/shampoo'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Shampoo
                </NavLink>
            </nav>
        </header>
    )
}