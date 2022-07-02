import React from "react";

interface Props {
  imageSrc: string;
  alt: string;
}

const CollectionCard = ({ imageSrc, alt }: Props) => {
  return (
    <div className="m-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-72">
      <img
        className="rounded-t-lg"
        src={imageSrc}
        alt={alt}
      />
      <div className="py-3 px-5">
        <h5 className="mb- text-xl tracking-tight text-gray-900 dark:text-white text-left">
          {alt}
        </h5>
      </div>
    </div>
  );
};

export default CollectionCard;
