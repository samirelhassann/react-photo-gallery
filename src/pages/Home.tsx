import { useState, useEffect } from "react";
import { PexelsPhoto } from "../services/Pexels/PexelsResponse";

import PhotoCard from "../components/PhotoCard";
import { PexelsService } from "../services/Pexels/PexelsService";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const [page, setPage] = useState(1);
  const [pagesExecuted, setPagesExecuted] = useState<number[]>([]);
  const [photos, setPhotos] = useState<PexelsPhoto[]>([]);

  useEffect(() => {
    callNewItems();
  }, []);

  const callNewItems = () => {
    PexelsService.getCuratedPhotos(page, 50).then((result) => {
      setPhotos([...photos].concat(result.photos));
      setPagesExecuted([...pagesExecuted, page]);

      setPage(page + 1);
    });
  };

  return (
    <InfiniteScroll
      dataLength={photos.length}
      next={callNewItems}
      hasMore={true}
      loader={
        <div className="py-5 flex-wrap flex align-center justify-center">
          <h4>Loading...</h4>
        </div>
      }
    >
      <div className="flex-wrap flex align-center justify-center">
        {photos.map((p) => (
          <PhotoCard
            id={p.id}
            imageSrc={p.src.landscape}
            alt={p.photographer}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Home;
