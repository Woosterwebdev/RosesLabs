import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='home-container'>
            <img className='home-img' src='/rosesLaboratory3.webp' alt='cartoon of Rose with long curly red hair standing infront of an exploding chemistry station' />
            <h1>Treat your hair right.</h1>
            <p>Our all natural shampoo will show you the REAL clean feeling.</p>
            <Link to="shampoos">View are various shampoo options</Link>
        </div>
    )
}