import React, { useState } from "react";
import "../cours.css";

const Web = () => {
  const [currentVideo, setCurrentVideo] = useState({
    videoUrl: "https://www.youtube.com/embed/iM1iSvloMlo",
    title: "GameDev with JavaScript and Kaboom.js – Metroidvania Game Tutorial",
    channel: "freeCodeCamp",
    details: "1M views • 1 week ago",
    description:
      "Learn to use JavaScript and Kaboom.js to build a Metroidvania-style game. In this tutorial, you'll learn everything from setting up your development environment to implementing complex game mechanics like enemy AI and boss battles.",
  });

  const videos = [
    {
      videoUrl: "https://www.youtube.com/embed/aEFkWxUNAVc",
      title: "Building REST APIs with Next.js 14 – Course for Beginners",
      channel: "AI Mastery",
      details: "700K views • 2 months ago",
      description:
        "Learn how to code REST APIs using Next.js 14. Create multiple MongoDB models, protect API routes, deploy APIs, and more.",
      thumbnail: "https://img.youtube.com/vi/aEFkWxUNAVc/0.jpg",
    },
    {
      videoUrl: "https://www.youtube.com/embed/JyeWoqWsQFo",
      title: "React Hook Form Course for Beginners (inc. Zod + Material UI)",
      channel: "Programming with Experts",
      details: "200K views • 1 month ago",
      description:
        "Learn how to use React Hook Form for creating forms in React. This course covers CRUD forms, authentication, and integration with Zod and Material UI.",
      thumbnail: "https://img.youtube.com/vi/JyeWoqWsQFo/0.jpg",
    },
    {
      videoUrl: "https://www.youtube.com/embed/Zi-Q0t4gMC8",
      title: "JavaScript Course for Beginners 2024",
      channel: "Web Dev Hub",
      details: "500K views • 2 weeks ago",
      description:
        "Master JavaScript basics with this beginner-friendly tutorial. Includes quizzes to test your knowledge.",
      thumbnail: "https://img.youtube.com/vi/Zi-Q0t4gMC8/0.jpg",
    },
    {
      videoUrl: "https://www.youtube.com/embed/s5YM1kH1ht8",
      title:
        "Full Stack Tutorial – Fiverr Clone with NextJS, React, Convex, Typescript, Tailwind CSS, ShadCN",
      channel: "Data Academy",
      details: "300K views • 3 weeks ago",
      description:
        "Create a Fiverr clone using NextJS, React, Convex, Typescript, Tailwind CSS, and ShadCN. A perfect project for advancing your full-stack development skills.",
      thumbnail: "https://img.youtube.com/vi/s5YM1kH1ht8/0.jpg",
    },
    {
      videoUrl: "https://www.youtube.com/embed/SMq1IQRweDc",
      title: "Learn React Router v6 – Full Course",
      channel: "Code Champs",
      details: "1.2M views • 6 months ago",
      description:
        "Master React Router v6 in this comprehensive course. Learn to set up routes, protect authenticated pages, create custom transitions, and more.",
      thumbnail: "https://img.youtube.com/vi/SMq1IQRweDc/0.jpg",
    },
  ];

  // Update the main video when a related video is clicked
  const handleVideoChange = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className="main-container">
      {/* Main Video Section */}
      <div className="main-video">
        <iframe
          id="video-player"
          src={currentVideo.videoUrl}
          title={currentVideo.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="video-info">
          <div className="video-title">{currentVideo.title}</div>
          <div className="video-details">
            {currentVideo.channel} • {currentVideo.details}
          </div>
          <div className="video-description">{currentVideo.description}</div>
        </div>
      </div>

      {/* Related Videos Section */}
      <div className="related-videos">
        {videos.map((video, index) => (
          <div
            className="related-video-card"
            key={index}
            onClick={() => handleVideoChange(video)}
          >
            <div
              className="thumbnail"
              style={{ backgroundImage: `url(${video.thumbnail})` }}
            ></div>
            <div className="related-info">
              <div className="related-title">{video.title}</div>
              <div className="related-details">
                {video.channel} • {video.details}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Web;
