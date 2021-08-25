import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { useParams } from 'react-router'



const CatBreed = () => {
  const [breeds, setBreeds] = useState([])


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://api.thecatapi.com/v1/breeds')
        setBreeds(data)
        // console.log(data)
        // console.log('response', breeds)
      } catch (err) {
        console.log(err)

      }
    }
    getData()
  }, [])


  // console.log('cats on state', cats)
  return (
    <section className="section">
      <div className="container">
        <div className="colums is-multiline">
          {breeds.map(breed => {
            return (
              <div key={breed.weight, breed.id} className="colume is-one-quarter-destop is -one-third-tablet">
                <div className="card">
                  <div className="card-header">
                    <div className="card-header-title">{breed.name}</div>
                  </div>
                  <div className="card-image">
                    <figure className="image image-is-1by1">
                      <img src={breed.image ? breed.image.url : ''} alt={breed.name} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <h5>{breed.origin}</h5>
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

export default CatBreed