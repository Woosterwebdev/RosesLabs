import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='home-container'>
            <h1>Treat your hair right.</h1>
            <p>Our all natural shampoo will show you the REAL clean feeling.</p>
            <Link to="shampoo">View are various shampoo options</Link>
        </div>
    )
}