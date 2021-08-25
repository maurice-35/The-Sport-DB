import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { useParams } from 'react-router'



const CatCategories = () => {
  const [categories, setCategories] = useState([])


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://api.thecatapi.com/v1/categories')
        setCategories(data)
        console.log(data)
        console.log('response', categories)
      } catch (err) {
        console.log(err)

      }
    }
    getData()
  } )


  // console.log('cats on state', cats)

  return (
    <section className="section">
      <div className="container">
        <div className="colums is-multiline">
          {categories.map(category => {
            return (
              <div key={category.id, category.name} className="colume is-one-quarter-destop is -one-third-tablet">
                <div className="card">
                  <div className="card-header">
                    <div className="card-header-title">{category.name}</div>
                  </div>
                  <div className="card-image">
                    <figure className="image image-is-1by1">
                      <img src={category.id } alt={category.name} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <h5>{category.id}</h5>
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

export default CatCategories