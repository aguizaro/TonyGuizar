import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import "./LazyMedia.css";

// eslint-disable-next-line react/prop-types
const LazyImage = ({ src, hash, alt }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
    };
  }, [src]);

  return (
    <div className="media-container">
      {!loaded && <Blurhash className="blurhash" hash={hash} />}
      <img
        className="lazy-img"
        style={{ display: loaded ? "flex" : "none" }}
        src={src}
        alt={alt}
        loading="lazy"
      />
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const LazyVideo = ({ src, hash, poster, alt, loop }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = src;
    video.onloadedmetadata = () => {
      setLoaded(true);
    };
  }, [src]);

  return (
    <div className="media-container">
      {!loaded && <Blurhash className="blurhash" hash={hash} />}
      {loaded && (
        <video
          className="vid"
          controls
          poster={poster}
          loop={loop ? true : false}
        >
          <source src={src} type="video/mp4" alt={alt} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export { LazyImage, LazyVideo };
