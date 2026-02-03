const ServiceCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="h-44 bg-gray-200" />

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <div className="h-4 bg-gray-200 rounded w-3/4" />

        {/* Description */}
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-5/6" />

        {/* Price & Rating */}
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="h-4 bg-gray-200 rounded w-12" />
        </div>

        {/* Button */}
        <div className="h-10 bg-gray-200 rounded-lg w-full" />
      </div>
    </div>
  );
};

export default ServiceCardSkeleton;
