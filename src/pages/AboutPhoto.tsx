import { useState, useEffect } from "react";
import { PexelsPhoto } from "../services/Pexels/PexelsResponse";

import PhotoCard from "../components/PhotoCard";
import { PexelsService } from "../services/Pexels/PexelsService";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import Loading from "../assets/Loading";

const TopRating = () => {
  const [params] = useSearchParams();

  const [photo, setPhoto] = useState<PexelsPhoto | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    PexelsService.getPhoto(Number(params.get("id"))).then((result) => {
      setPhoto(result);
      setIsLoading(false);
    });
  }, [params]);

  const renderButton = (link: string, text: string) => {
    return (
      <a href={link} download="file" target="_blank" rel="noreferrer">
        <button
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          {text}
        </button>
      </a>
    );
  };

  return (
    <div className="p-10">
      {isLoading && (
        <div className="flex justify-center align-center">
          <Loading />
        </div>
      )}

      {!isLoading && (
        <div className="flex flex-wrap justify-center align-center">
          <div>{photo && <img src={photo.src.large} alt={photo.alt} />}</div>
          <div className="px-10 text-left	">
            {photo?.alt && (
              <span className="text-2xl block py-2">
                <b>Title:</b> {photo?.alt}
              </span>
            )}

            {photo?.photographer && (
              <span className="text-2xl block py-2">
                <b>Photographer:</b> {photo?.photographer}
              </span>
            )}

            {photo?.src.original &&
              renderButton(photo?.src.original, "Original")}

            {photo?.src.medium && renderButton(photo?.src.medium, "Medium")}

            {photo?.src.large && renderButton(photo?.src.large, "Large")}

            {photo?.src.large2x && renderButton(photo?.src.large2x, "Large 2k")}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopRating;
