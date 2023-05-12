import { useState } from 'react'
import Star from './Star.js'

function StarRating(props) {
  const StarsIDS = [1, 2, 3, 4, 5];

  const [rating, setRating] = useState(1);

  const selectionWords = [
    "Unforgivable.",
     "Subpar.",
     "Okay.",
     "Nice!",
     "Excellent!"
   ]

  const handleClick = (id) => {
    console.log("works");

    setRating(id);
    console.log(id);

    setWord(selectionWords[id-1])
  }

  const [word, setWord] = useState("Unforgivable");

  return (

    <div className="star-rating-wrap">
      <div className="stars">
        {StarsIDS.map((id) => 
          <Star 
            handleClick={handleClick} 
            id={id} 
            enabled={(rating > (id-1)) ? true : false}
          />
      )}
      </div>
      <h2>{word}</h2>
    </div>


  )
}

export default StarRating
