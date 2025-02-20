import { useNavigate, useRouteError } from "react-router-dom";
import errorImage from "../assets/404-image.png";
export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate(-1);
  };

  // Check if error status is available and handle 404 case
  if (error?.status === 404) {
    return (
      <div className="flex h-screen items-center justify-center flex-col bg-gray-100">
        <img
          src={errorImage} // Replace with your 404 error image URL
          alt="404 Error"
          className="w-1/2 md:w-1/3 mb-6"
        />
        <h2 className="text-4xl font-bold text-red-600 mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-700 mb-6">Sorry,  the page you&apos;re looking for doesn&apos;t exist.</p>
        <button
          className="bg-red-500 text-white w-32 py-2 rounded-full hover:bg-red-600 transition-all"
          onClick={handleBackPage}
        >
          Go Back
        </button>
      </div>
    );
  }

  // Handle other error cases (e.g., missing status or general errors)
  return (
    <div className="flex h-screen items-center justify-center flex-col bg-gray-100">
      <img
        src="https://example.com/error-image.png" // Replace with your generic error image URL
        alt="Error"
        className="w-1/2 md:w-1/3 mb-6"
      />
      <h1 className="text-4xl font-bold text-red-600 mb-4">Something Went Wrong</h1>
      <p className="text-xl text-gray-700 mb-6">
        {error?.message || "An unexpected error occurred."}
      </p>
      <button
        className="bg-red-500 text-white w-32 py-2 rounded-full hover:bg-red-600 transition-all"
        onClick={handleBackPage}
      >
        Go Back
      </button>
    </div>
  );
};
