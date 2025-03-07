import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Redirects the user to the homepage
  };

  return (
    <div className="w-full h-screen bg-transparent flex flex-col items-center justify-center text-center text-white">
      <div className=" w-full h-full flex items-center justify-center flex-col p-6">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-white mb-6 animate__animated animate__fadeInUp">
          Oops! Page Not Found 😞
        </h1>
        <p className="text-xl sm:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
          We couldn't find the page you're looking for.
        </p>
        <button
          onClick={handleGoHome}
          className="px-8 py-3 bg-[#ffffff] text-[#1D173C] text-lg font-semibold rounded-lg shadow-lg hover:bg-[#1D173C] hover:text-[#ffffff] transition-all transform hover:scale-105"
        >
          <div className="flex items-center gap-2">
            <div>
              <FaArrowCircleLeft />
            </div>
            <div>Go Back</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
