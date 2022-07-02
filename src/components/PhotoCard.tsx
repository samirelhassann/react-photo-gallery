import React from "react";

interface Props {
  imageSrc: string;
  alt: string;
}

const Component = ({ imageSrc, alt }: Props) => {
  return (
    <div className="m-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-72">
      <img className="rounded" src={imageSrc} alt={alt} />
    </div>
  );
};

export default Component;
