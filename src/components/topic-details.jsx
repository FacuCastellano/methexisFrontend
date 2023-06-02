//import {ButtonT2} from './button-t2'
import "./css/topic-details.css";
import { Comment } from "./comment";
import { StarsScores } from "./stars-scores";
import { RankTopic } from "./rank-topic.jsx";

function ButtonT2({ buttonName }) {
  return <div className="button-t2">{buttonName}</div>;
}

export function TopicDetails({ rank, totalPoints, totalVotes, comments }) {
  const stars = (totalPoints / totalVotes).toFixed(2);

  return (
    <div className="topicDetalis-container">
      <div className="topic-scores-container">
        <RankTopic rank={rank} />
        <StarsScores totalPoints={totalPoints} totalVotes={totalVotes} />
      </div>

      <div className="topic-details-menu">
        <ButtonT2 buttonName={"FAQs"} />
        <ButtonT2 buttonName={"Resources"} />
        <ButtonT2 buttonName={"Others"} />
      </div>
      <h3>Comments</h3>
      <div className="comments-container">
        {comments.map((commentObject, index) => {
          return (
            <Comment
              userName={commentObject.user}
              comment={commentObject.message}
              key={`comment-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
}
