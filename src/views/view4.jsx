import { NavBar } from "../components/navbar";
import { Topic } from "../components/topic";
import { TopicNotInfo } from "../components/topicNotInfo";
import { useState, useEffect } from "react";
import "./css-views/view4.css";

export function View4(props) {
  const [topic, setTopic] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topic = localStorage.getItem("topicSelected");
        const response = await fetch(
          `http://localhost:3000/get-topic?topicStringId=${topic}`
        );
        const data = await response.json();

        setTopic(data.topic);
      } catch (error) {}
    };

    fetchData();
  }, []);

  if (topic != null && topic != -1) {
    return (
      <div className="view4">
        <NavBar />
        <Topic topic={topic} />
      </div>
    );
  } else {
    return <div className="view4">
    <NavBar />
    <TopicNotInfo />
  </div>
  }
}
