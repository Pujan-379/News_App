export const SkeletonCard = () => {
  return (
    <li className="w-full max-w-xs p-4 bg-white shadow-lg rounded-lg cursor-pointer animate-pulse">
   
      <div className="w-full h-48 bg-gray-300 rounded-lg"></div>
      <div className="p-2 space-y-4">
        <div className="h-3 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-3 bg-gray-300 rounded w-full"></div>
      </div>
    </li>
  );
  };
  