import React from 'react'
import { Link } from 'react-router-dom'

export default function() {
    return (
        <div>
            <div>
                <h1>Don't dump chmeicals into your hair.</h1>
                <p>Our mission is to help you break away from all of those chmeicals in your commercial hair products damaging your hair.</p>
                <p>Our team is full of natural hair care enthusiasts who have tired and tested our products.</p>
            </div>
            <div>
                <h2>View our hair care options. <br /> Your hair deserves it.</h2>
                <Link className="link-button" to="/shampoo">View our products</Link>
            </div>
        </div>
    )
}