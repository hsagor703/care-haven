"use server";
// import React, { useEffect, useState } from "react";
import services from "../../component/servicesData/services.json";
import ServiceCard from "@/component/card/ServiceCard";
// import ServiceCardSkeleton from "@/component/loadingSkelaton/ServiceCardSkeleton";

const Services = async () => {
  // const [loading, setLoading] = useState(true);
  // const [serviceItems, setServiceItems] = useState(null);

  // server console
  // useEffect(() => {
  //   const fetchPromise = async () => {
  //     const servicesData = await services;
  //     console.log(servicesData);
  //     setServiceItems(servicesData);
  //     setLoading(false);
  //     setTimeout(() => {}, 1500);
  //   };
  //   fetchPromise();
  // }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5  lg:px-0">
      
      {await services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default Services;
