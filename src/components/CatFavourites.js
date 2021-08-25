import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import CatCard from './CatCard'

const CatFavourites = () => {
  const [favourites, setFavourites] = useState([])


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://api.thecatapi.com/v1/favourites')
        setFavourites(data)
      } catch (err) {
        console.log(err)
      } 
    }
    getData()
  }, [])

  console.log('Favourites', CatFavourites)

  return (
    <section className="section">
      <div className="container">
        <div className="colums is-multiline">
          {favourites.map(favourite=> {
            return (
              <div key={favourite.user_id, favourite.image} className="colume is-one-quarter-destop is -one-third-tablet">
                <div className="card">
                  <div className="card-header">
                    <div className="card-header-title">{favourite.name}</div>
                  </div>
                  <div className="card-image">
                    <figure className="image image-is-1by1">
                      <img src={favourite.image ? favourite.image.url : ''} alt={favourite.name} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <h5>{favourite.user_id}</h5>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div >
    </section >
  )
}

export default CatFavourites