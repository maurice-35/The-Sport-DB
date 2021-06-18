import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { useParams } from 'react-router'



const CatModel = () => {
  const [breeds, setCats] = useState([])


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://api.thecatapi.com/v1/breeds')
        setCats(data)
        // console.log('response', response)
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
                      <img src={breed.image} alt={breed.name}/>
                      {/* <img src={'https://api.thecatapi.com/v1/images/search'}/> */}
                      {/* <img src=" {{ breed('/upload/imgcats') . '/' . $row->catpic }}" alt="breed.name" className="image"></img> */}
                      {/* <img src="{{ breed('images/imgdogs') . '/' . $row->dogpic }}" alt="breed.name" className="image"></img> */}
                      {/* <img src="{{ breed('https://api.thecatapi.com/v1/images/upload') . '/' . $row->yourimg }}" alt="breed.name" className="image"></img> */}
                      {/* <img src={{ url: 'https://api.thecatapi.com/v1/images/upload' }} /> */}
                      {/* const image = require (`./images/picture.jpg`) */}
                      {/* <img src="https://api.thecatapi.com/v1/favourites"
                        style={{ width: 500, height: 500 }} /> */}
                      <img src="https://cdn2.thecatapi.com/images/7r0.jpg" 
                        // {/* <img src="./url.id" */}
                        // `<li><img src="${breed.image.jpg"></img></li>`
                        style={{ width: 500, height: 500 }} />
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

export default CatModel

// import axios from 'axios'
// import { useParams } from 'react-router-dom'


// const CatModels = () => {
//   const [cat, setCat] = useState([])
//   // const [hasErrors, setHasError] useState([])
//   const { image } = useParams()

//   useEffect(() => {
//     const getData = async () => {
//       // try {
//       const { data } = await axios.get('https://api.thecatapi.com/v1/breeds/')
//       console.log(data)
//       // } catch (err) {
//       setCat(data)
//       //  setHasError(true)
//       // }
//     }

//     getData()
//   }, [])

//   console.log('cat', cat)
//   return (
//     <h1>cheese model page</h1>

//   )





//   // <>
//   //   <NavBar />
//   //   <Home />
//   // </>


// }



// export default CatModels