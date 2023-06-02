import { TopicCard } from "./topic-card.jsx";

import "./css/topic-card.css";

export function Topic({topic}) {
  const { topicName,developments } =topic;

  return (
    <>
      <h2 className="topic-name">{topicName}</h2>
      {developments.map((development,index) => {
        return <TopicCard {...development} key={index} />;
      })}
    </>
  );
}
