import React from 'react'
import { Link } from 'react-router-dom'

export default function() {
    return (
        <div className='about-container'>
            <img src='/herb-powders.jpg' alt='herbal powders in spoons on top of a white surface.' />
            <a href='https://www.pexels.com/photo/close-up-shot-of-spoons-with-colored-powders-on-a-white-surface-5078590/'>Photo by Nataliya Vaitkevich</a>
            <h1>Don't dump chemicals into your hair.</h1>
            <p>Our mission is to help you break away from all of those chmeicals in your commercial hair products damaging your hair.</p>
            <p>Our team is full of natural hair care enthusiasts who have tired and tested our products.</p>
            <Link className="link-button" to="/shampoos">View our products</Link>
        </div>
    )
}