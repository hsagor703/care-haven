import ServiceCardSkeleton from "@/component/loadingSkelaton/ServiceCardSkeleton";
import React from "react";

const ServiceLoading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5  lg:px-0">
      {Array.from({ length: 3 }).map((_, i) => (
        <ServiceCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default ServiceLoading;
