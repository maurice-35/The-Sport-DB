import React, { useEffect, useState } from 'react'
import axios from 'axios'


const CatImage = () => {

  const [images, setImages] = useState([])


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://api.thecatapi.com/v1/images/search')
        setImages(data)
        // console.log('response', response)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  console.log('ImageData', CatImage)

    return (
        <section className="section">
        <div className="container">
          <div className="colums is-multiline">
            {images.map(image => {
              return (
                <div key={image.weight, image.id} className="colume is-one-quarter-destop is -one-third-tablet">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-header-title">{image.name}</div>
                    </div>
                    <div className="card-image">
                      <figure className="image image-is-1by1">
                        <img src={image.image ? image.image.url : ''} alt={image.name} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <h5>{image.origin}</h5>
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

export default CatImage




