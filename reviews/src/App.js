import './App.css'
import reviews from './data/reviews.json'
import { useEffect, useState } from 'react'

const App = () => {
  return (
    <>
      <h1>Our Reviews</h1>
      <hr />
      <ReviewControl />
    </>
  )
}

const mod = (x, n) => ((x % n) + n) % n

const ReviewControl = () => {
  const reviewRange = () => Math.floor(Math.random() * (reviews.length - 1) + 1)
  const [reviewIndex, setReviewIndex] = useState(reviewRange())
  const [review, setReview] = useState(reviews[reviewIndex])
  const changeReview = (change) => {
    setReviewIndex(mod(reviewIndex + change, reviews.length))
  }

  useEffect(() => setReview(reviews[reviewIndex]), [reviewIndex])

  return (
    <div className='reviewControl'>
      <div className='quotePic'>
        <img src={review.imageLink} alt='X' />
        <div>"</div>
      </div>
      <h4>{review.fullName}</h4>
      <h5>{review.title}</h5>
      <p>{review.review}</p>
      <div className='btns'>
        <button onClick={() => changeReview(-1)}>&lt;</button>
        <button onClick={() => changeReview(reviewRange())}>?</button>
        <button onClick={() => changeReview(1)}>&gt;</button>
      </div>
    </div>
  )
}

export default App
