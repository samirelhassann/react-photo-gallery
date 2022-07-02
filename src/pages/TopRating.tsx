import { useState, useEffect } from "react";
import Loading from "../assets/Loading";
import { PexelsPhoto } from "../services/Pexels/PexelsResponse";

import PhotoCard from "../components/PhotoCard";
import { PexelsService } from "../services/Pexels/PexelsService";

const TopRating = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState<PexelsPhoto[]>([]);

  useEffect(() => {
    // const actualPhotos = 
    PexelsService.getCuratedPhotos(1, 50).then((result) => {
      setPhotos(result.photos);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="p-5">
      {isLoading && (
        <div className="align-center justify-center flex">
          <Loading /> 
        </div>
      )}

      {!isLoading && (
        <div className="flex-wrap flex align-center justify-center">
          {photos.map((p) => (
            <PhotoCard imageSrc={p.src.landscape} alt={p.photographer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopRating;
