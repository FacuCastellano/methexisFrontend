export function TopicNotInfo(props) {
  
  return (
    <div className="topicNotInfo">
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