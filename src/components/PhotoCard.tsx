import React from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  imageSrc: string;
  alt: string;
}

const Component = ({ id, imageSrc, alt }: Props) => {
  const basePath = process.env.REACT_APP_BASENAME || '';

  return (
    <Link to={`${basePath}/photos?id=${id}`}>
      <button>
        <div className="max-w-sm m-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 w-72">
          <img className="rounded" src={imageSrc} alt={alt} />
        </div>
      </button>
    </Link>
  );
};

export default Component;
