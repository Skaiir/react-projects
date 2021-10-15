import React, { useState, useEffect } from 'react'
import tourData from './data/tours.json'
import './App.css'

const App = () => {
  const [tours, setTours] = useState(tourData)
  const removeSelf = (tour) => {
    setTours(tours.filter((item) => item !== tour))
  }
  return (
    <main className='tours'>
      <div className='ourTours'>
        <h1>Our Tours</h1>
        <hr />
      </div>
      {tours.map((tour) => (
        <TourCard tour={tour} removeSelf={removeSelf} />
      ))}
    </main>
  )
}

const TourCard = (props) => {
  const { title, price, description, imgUrl, imgAlt } = props.tour
  const removeSelf = () => props.removeSelf(props.tour)
  return (
    <article className='tourCard'>
      <img src={imgUrl} alt={imgAlt} />
      <div className='tourDescription'>
        <div>
          <h3>{title}</h3>
          <div className='priceSticker'>{price}</div>
        </div>
        <ReadMoreParagraph description={description} />
        <button className='removeBtn' onClick={removeSelf}>
          Not interested
        </button>
      </div>
    </article>
  )
}

const ReadMoreParagraph = (props) => {
  const description = props.description
  const charLimit = 150
  const [isReadMore, setIsReadMore] = useState(false)
  const readMoreToggle = () => setIsReadMore(!isReadMore)

  useEffect(() => {}, [isReadMore])
  return (
    <div>
      <p className='descriptionText'>
        {isReadMore ? description : description.substring(0, charLimit) + '...'}
        <a className='toggleMoreButton' onClick={readMoreToggle}>
          {isReadMore ? '  Show Less' : '  Read More'}
        </a>
      </p>
    </div>
  )
}

export default App
