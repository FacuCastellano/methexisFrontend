import "./css/topic-video.css";

export function TopicVideo({videoId}) {
  const urlVideo = 'https://www.youtube.com/embed/'+videoId
  
  return (
    <div className="topicVideo-container">
      <iframe  src={urlVideo} ></iframe>
    </div>
  );
}

{/* <iframe  src={urlVideo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe> */}