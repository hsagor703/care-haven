import Link from "next/link";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const NotFound = ({
  title = " Not Found",
  message = "Sorry, the service you are looking for does not exist or has been removed.",
}) => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaExclamationTriangle className="text-red-600 text-6xl" />
        </div>

        {/* Text */}
        <h1 className="text-2xl font-bold text-red-800 mb-2">{title}</h1>
        <p className="text-red-600 mb-6">{message}</p>

        {/* Button */}
        <Link href="/">
          <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition">
            <FaHome />
            Go Back to Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
