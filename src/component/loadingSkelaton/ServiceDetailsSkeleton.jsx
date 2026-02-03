const ServiceDetailsSkeleton = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 animate-pulse">
      {/* Banner */}
      <div className="bg-gray-100 rounded-2xl p-6 md:flex gap-6">
        <div className="w-full md:w-1/3 h-48 bg-gray-200 rounded-xl" />

        <div className="flex-1 space-y-4">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-4 bg-gray-200 rounded w-1/4" />
        </div>
      </div>

      {/* Description */}
      <div className="mt-8 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-1/3" />
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-5/6" />
      </div>

      {/* Pricing */}
      <div className="mt-8">
        <div className="h-5 bg-gray-200 rounded w-1/4 mb-4" />
        <div className="grid sm:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-20 bg-gray-200 rounded-xl"
            />
          ))}
        </div>
      </div>

      {/* What's included */}
      <div className="mt-8">
        <div className="h-5 bg-gray-200 rounded w-1/3 mb-4" />
        <div className="grid sm:grid-cols-2 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-4 bg-gray-200 rounded"
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <div className="h-12 bg-gray-200 rounded-xl w-full sm:w-1/3 mx-auto" />
      </div>
    </section>
  );
};

export default ServiceDetailsSkeleton;
