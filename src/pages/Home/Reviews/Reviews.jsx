import { use } from "react"


const Reviews = ({reviewPromise}) => {
    const reviews= use(reviewPromise);
    console.log(reviews);
  return (
    <div>Reviews</div>
  )
}

export default Reviews