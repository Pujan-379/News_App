import { useState, useEffect } from "react";
import { SkeletonCard } from "./SkeletonCard";

export const Card = ({ curData }) => {
  const { title, url, image, source, description } = curData;

  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading)  return <SkeletonCard/>

  

 
  if (!image) return null;

  return (
    <li
      onClick={() => window.open(url, "_blank")}
      className="w-full max-w-xs p-4 sm:w-full bg-white shadow-xl rounded-lg 
      cursor-pointer transition-all duration-300 
      ease-in-out hover:shadow-2xs  hover:transition-colors"
    >
      <div className="w-full h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt={title || "Image"}
        />
      </div>

      <div className="p-2">
        <p className="text-sm text-gray-500">{source?.name || "Unknown Source"}</p>
        <h4 className="text-lg font-semibold truncate">{title || "No Title"}</h4>
        <p className="text-sm text-gray-700 line-clamp-3">{description || "No description available."}</p>
      </div>
    </li>
  );
};
