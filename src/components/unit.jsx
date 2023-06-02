import "./css/unit.css";
import { useNavigate } from "react-router-dom";

export function Unit({ unitName, topics }) {
  const navigate = useNavigate();

  const handleClick = (x) => {
    return () => {
      localStorage.setItem("topicSelected", x);
      navigate("/topic");
    };
  };

  return (
    <div className="unit">
      <h2>&nbsp;{unitName.split("-").join(" ").toUpperCase()}</h2>
      <div className="topics-container">
        {topics.map((topic, index) => (
          <div
            className="topic-title"
            onClick={handleClick(Object.values(topic))}
            key={index}
          >
            <b>{index + 1}</b>{" "}
            <p> {Object.keys(topic).toString().split("-").join(" ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
