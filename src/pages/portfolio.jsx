import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";

const videos = [
  {
    title: "5 Minor Deeds In Daily Life according to Islam",
    src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnail: "https://via.placeholder.com/300x200?text=Deeds+In+Islam",
  },
  {
    title: "ALWAYS Cover Your Mouth While Yawning",
    src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnail: "https://via.placeholder.com/300x200?text=Deeds+In+Islam",
  },
  {
    title: "Benifits Of Visiting Sicks According To Hadith",
    src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnail: "https://via.placeholder.com/300x200?text=Deeds+In+Islam",
  },
  {
    title: "Daily Life Problems Due To Sewerage",
    src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnail: "https://via.placeholder.com/300x200?text=Deeds+In+Islam",
  },
  {
    title: "Demerits of Paper Currency",
    src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnail: "https://via.placeholder.com/300x200?text=Deeds+In+Islam",
  },
  {
    title: "Disadvantages Of Plastic Bag",
    src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
       thumbnail: "https://via.placeholder.com/300x200?text=Deeds+In+Islam",

  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen bg-white p-6" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-gray-800 text-3xl font-bold text-center mb-3"
      >
        Our Video
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="text-gray-600 text-lg font-bold text-center mb-8"
      >
        If you don't see an answer to your question, you can send us an email from our contact form.
      </motion.p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, index) => {
          const videoRef = useRef(null);
          const [isPlaying, setIsPlaying] = useState(false);

          const toggleVideo = () => {
            const videoEl = videoRef.current;
            if (!videoEl) return;

            if (videoEl.paused) {
              videoEl.play();
              setIsPlaying(true);
            } else {
              videoEl.pause();
              setIsPlaying(false);
            }
          };

          return (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={toggleVideo}
              >
                {/* Video thumbnail only — no hover play */}
                <video
                  ref={videoRef}
                  className="w-full h-48 object-cover"
                  src={video.src}
                  // poster={video.thumbnail}
                  loop
                  controls={false}
                />

                {/* Animated icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/30"
                >
                  {isPlaying ? (
                    <FaPause className="text-white text-4xl" />
                  ) : (
                    <FaPlay className="text-white text-4xl" />
                  )}
                </motion.div>
              </div>

              <div className="p-4 text-center">
                <h3 className="text-md font-semibold text-gray-700">
                  {video.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
