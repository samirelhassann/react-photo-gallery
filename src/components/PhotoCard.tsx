import React from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  imageSrc: string;
  alt: string;
}

const Component = ({ id, imageSrc, alt }: Props) => {
  return (
    <Link to={`/photos?id=${id}`}>
      <button>
        <div className="m-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-72">
          <img className="rounded" src={imageSrc} alt={alt} />
        </div>
      </button>
    </Link>
  );
};

export default Component;
