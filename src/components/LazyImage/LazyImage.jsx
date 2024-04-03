import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import "./LazyImage.css";

//- should have used typescript
// eslint-disable-next-line react/prop-types
const LazyImage = ({ src, hash, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
      setImageDimensions({ width: img.width, height: img.height });
    };
  }, [src]);

  return (
    <>
      <div className="blurhash" style={{ display: loaded ? "none" : "flex" }}>
        <Blurhash
          hash={hash}
          width={imageDimensions.width}
          height={imageDimensions.height}
        />
      </div>
      <img
        className="lazy-img"
        style={{ display: !loaded ? "none" : "flex" }}
        src={src}
        alt={alt}
        loading="lazy"
      />
    </>
  );
};

export default LazyImage;
