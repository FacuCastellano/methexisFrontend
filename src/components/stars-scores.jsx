import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import "./css/stars-scores.css";

export function StarsScores({ totalPoints, totalVotes }) {
  const starsQuantity = [];
  const average = (totalPoints / totalVotes).toFixed(2);
  const fullStars = Math.trunc(average);
  const decimal = average - fullStars;
  const emptyStars = 5 - (fullStars + Math.ceil(decimal));

  for (let i = 1; i <= fullStars; i++) {
    starsQuantity.push(<BsStarFill className="single-star" />);
  }
  if (decimal < 0.25) {
    starsQuantity.push(<BsStar className="single-star" />);
  } else if (decimal <= 0.75) {
    starsQuantity.push(<BsStarHalf className="single-star" />);
  } else {
    starsQuantity.push(<BsStarFill className="single-star" />);
  }
  for (let i = 1; i <= emptyStars; i++) {
    starsQuantity.push(<BsStar className="single-star" />);
  }

  return (
    <div className="stars-scores">
      <div className="stars">{...starsQuantity}</div>
      <div className="stars-stadistics">
        {"(" + average + ")" + " (" + totalVotes + " Votes)"}
      </div>
    </div>
  );
}
