import React, { useState } from "react";
import "../cours.css";

const MachineLearning = () => {
  const [currentVideo, setCurrentVideo] = useState({
    videoUrl: "https://www.youtube.com/embed/HJd1I3FdSnY",
    title: "Deep Learning Course for Beginners",
    channel: "freeCodeCamp",
    details: "1M views • 1 week ago",
    description:
      "This deep learning course is designed to take you from beginner to proficient in deep learning. You will learn the fundamental concepts, architectures, and applications of deep learning in a clear and practical way. So get ready to build, train, and deploy models that can tackle real-world problems across various industries.",
  });

  const videos = [
    {
      videoUrl: "https://www.youtube.com/embed/bmmQA8A-yUA",
      title: "Machine Learning in 2024 – Beginner's Course",
      channel: "AI Mastery",
      details: "700K views • 2 months ago",
      description:
        "This machine learning course is created for beginners who are learning in 2024. It emphasizes a roadmap, hands-on applications, and a comprehensive end-to-end project using Python.",
      thumbnail: "https://img.youtube.com/vi/bmmQA8A-yUA/0.jpg",
    },
    {
      videoUrl: "https://www.youtube.com/embed/x0AnCE9SE4A",
      title: "Machine Learning with Python and Scikit-Learn – Full Course",
      channel: "Programming with Experts",
      details: "200K views • 1 month ago",
      description:
        "Learn Machine Learning with Python and Scikit-Learn in this comprehensive course. Dive into hands-on practical applications and create exciting projects.",
      thumbnail: "https://img.youtube.com/vi/x0AnCE9SE4A/0.jpg",
    },
    {
      videoUrl: "https://www.youtube.com/embed/hDKCxebp88A",
      title: "SQL Tutorial for Beginners",
      channel: "Web Dev Hub",
      details: "500K views • 2 weeks ago",
      description:
        "Master the basics of SQL with this beginner-friendly tutorial. Learn to query, manipulate, and manage data efficiently.",
      thumbnail: "https://img.youtube.com/vi/hDKCxebp88A/0.jpg",
    },
    {
      videoUrl: "https://www.youtube.com/embed/cHYq1MRoyI0",
      title: "Pytest Tutorial – How to Test Python Code",
      channel: "Data Academy",
      details: "300K views • 3 weeks ago",
      description:
        "Learn how to use pytest, the powerful testing framework for Python. Gain a deep understanding of its features, best practices, and nuances.",
      thumbnail: "https://img.youtube.com/vi/cHYq1MRoyI0/0.jpg",
    },
    {
      videoUrl: "https://www.youtube.com/embed/5NgNicANyqM",
      title: "Harvard CS50’s Artificial Intelligence with Python – Full University Course",
      channel: "Code Champs",
      details: "1.2M views • 6 months ago",
      description:
        "Explore the foundations of artificial intelligence with this university-level course. Dive into graph search algorithms, optimization, reinforcement learning, and more.",
      thumbnail: "https://img.youtube.com/vi/5NgNicANyqM/0.jpg",
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

export default MachineLearning;
