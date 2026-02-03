import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const {
    id,
    title,
    shortDescription,
    priceFrom,
    priceUnit,
    rating,
    image,
  } = service;

  return (
    <div className="bg-white/5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      {/* Image */}
       <Image
        src={image}
        alt={title}
        height={48}
        width={100}
        className="w-full h-48 object-cover mb-4"
      />

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold linear-text">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          {shortDescription}
        </p>

        {/* Price & Rating */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-green-600 font-semibold">
            From ৳{priceFrom}/{priceUnit}
          </p>

          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="text-sm font-medium text-gray-700">
              {rating}
            </span>
          </div>
        </div>

        {/* Button */}
        <Link href={`/services/${id}`}>
          <button className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
