import { TopicVideo } from "./topic-video";
import { TopicDetails } from "./topic-details";
import "./css/topic-card.css";

export function TopicCard(props) {
  const { videoId, rank, totalPoints, totalVotes, comments } = props;
  return (
    <div className="topicCard-container">
      <TopicVideo videoId={videoId} />
      <TopicDetails
        rank={rank}
        totalPoints={totalPoints}
        totalVotes={totalVotes}
        comments={comments}
      />
    </div>
  );
}
