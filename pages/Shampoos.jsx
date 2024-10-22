import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getShampoos } from '../api'

export default function Shampoo() {
    //Set states for search, shampoos, error, loading, and typefilter
    const [searchParams, setSearchParams] = useSearchParams()
    const [shampoos, setShampoos] = React.useState([])
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const typeFilter = searchParams.get("type")

    /* loadShampoos and getShampoos from api.js */
    React.useEffect(() => {
        async function loadShampoos() {
            setLoading(true)
            try {
                const data = await getShampoos()
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
    }, [])

    /* If filter selected filter shampoos state */
    const displayedShampoos = typeFilter
        ? shampoos.filter(shampoo => shampoo.type === typeFilter)
        : shampoos

    /* Loop through each shampoo retrieved from shampoos state and generate product tile */
    const shampooElements = displayedShampoos.map(shampoo => (
        <div key={shampoo.id} className='shampoo-tile'>
            <Link
                to={shampoo.id}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter
                }}
            >
                <img src={shampoo.imageUrl} />
                <div className='shampoo-info'>
                    <h3>{shampoo.name}</h3>
                    <p>{shampoo.price}</p>
                </div>
                <i className={`shampoo-type ${shampoo.type} selected`}>{shampoo.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className='shampoo-list-container'>
            <h1>Find your new shampoo</h1>
            <div className='shampoo-list'>
                <p>shampoo here</p>
            </div>
        </div>
    )
}