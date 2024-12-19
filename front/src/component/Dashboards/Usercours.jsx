import React, { useState } from "react";
import "./cours.css";
import SidebarUser from "./Sidebar";

const Usercours = () => {
  const [currentVideo, setCurrentVideo] = useState({
    videoUrl: "https://www.youtube.com/embed/MsnQ5uepIaE",
    title: "Frontend Web Development: In-Depth Project Tutorial (HTML, CSS, JavaScript, TypeScript, React)",
    channel: "freeCodeCamp",
    details: "1M views • 1 week ago",
    description: "In this frontend web development project tutorial, you will improve your skills with HTML, CSS, JavaScript, TypeScript, & React. This video is a sequel to the Frontend Developer Bootcamp video we posted by the same creator. However, as long as you have a basic understanding of HTML, CSS, and JavaScript, you can start with this tutorial." 
    ,
  });
// change it
  const videos = [
    {
      videoUrl: "https://www.youtube.com/embed/MsnQ5uepIaE",
      title: "Machine Learning Crash Course",
      channel: "AI Simplified",
      details: "1M views • 1 week ago",
      description: "An introduction to the key concepts in machine learning, with practical examples.",
      thumbnail: "https://img.youtube.com/vi/MsnQ5uepIaE/0.jpg",
    },
    {
      videoUrl: "https://www.youtube.com/embed/x0AnCE9SE4A",
      title: "LangChain GEN AI Tutorial",
      channel: "Programming with Experts",
      details: "200K views • 1 month ago",
      description: "Learn how to us LangChain with GPT-4, Google Gemini Pro, and LLAMA2 by creating six end-to-end projects. The goal of LangChain is to link powerful LLMs, such as OpenAI's GPT-3.5 and GPT-4, to an array of external data sources to create and reap the benefits of natural language processing (NLP) applications.",
      thumbnail: "https://img.youtube.com/vi/x0AnCE9SE4A/0.jpg",
    },
    {
      videoUrl: "https://www.youtube.com/embed/-fW2X7fh7Yg",
      title: "SQL Tutorial for Beginners",
      channel: "Web Dev Hub",
      details: "500K views • 2 weeks ago",
      description: "Welcome to this comprehensive SQL tutorial course. This course covers the basics of relational databases and SQL, including setting up MySQL, inserting data, and working with aggregation, grouping, and pagination in SQL queries. It also covers advanced topics such as combining tables using joins, executing SQL queries using Python and SQL Alchemy, and solving technical interview questions. By the end of this course, you'll have the knowledge and confidence to excel in SQL.",
      thumbnail: "https://img.youtube.com/vi/-fW2X7fh7Yg/0.jpg",
    },
    {
      videoUrl: "https://www.youtube.com/embed/31KTdfRH6nY",
      title: "Building web applications in Java with Spring Boot 3 – Tutorial",
      channel: "Data Academy",
      details: "300K views • 3 weeks ago",
      description: "Learn how to build web applications in Java with Spring Boot 3. You'll learn about Spring's fundamentals by creating a REST API that communicates with a database and is supported by a comprehensive suite of tests. By the end of this course you will have learned what you need to start building your own web applications with Spring Boot 3.",
      thumbnail: "https://img.youtube.com/vi/31KTdfRH6nY/0.jpg",
    },
    {
      videoUrl: "https://www.youtube.com/embed/bmmQA8A-yUA",
      title: "Machine Learning in 2024 – Beginner's Course",
      channel: "AI Mastery",
      details: "700K views • 2 months ago",
      description: "This machine learning course is created for beginners who are learning in 2024. The course begins with a Machine Learning Roadmap for 2024, emphasizing career paths and beginner-friendly theory. Then it the course moves on to hands-on practical applications and a comprehensive end-to-end project using Python.",
      thumbnail: "https://img.youtube.com/vi/bmmQA8A-yUA/0.jpg",
    },
    {
      videoUrl: "https://www.youtube.com/embed/5ZdHfJVAY-s",
      title: "Build 25 React Projects – Tutorial",
      channel: "Code Champs",
      details: "1.2M views • 6 months ago",
      description: "Learn to build full-stack web apps using the latest frameworks and tools.",
      thumbnail: "https://img.youtube.com/vi/5ZdHfJVAY-s/0.jpg",
    },
  ];

  // Update the main video when a related video is clicked
  const handleVideoChange = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className="main-container">
      {/* Main Video Section */}
      <SidebarUser />

      <div className="main-video">
        <iframe
          id="video-player"
          src={currentVideo.videoUrl}
          title="YouTube video"
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

export default Usercours;