"use client";
import React, { useEffect, useState } from "react";
import services from "../../../component/servicesData/serviceDetails.json";
import ServiceDetailsPage from "@/component/card/ServiceDetailsPage";
import ServiceDetailsSkeleton from "@/component/loadingSkelaton/ServiceDetailsSkeleton";
const ServiceDetails = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [service, setServices] = useState(null);
  useEffect(() => {
    const fetchPromise = async () => {
      const { slug } = await params;
      setTimeout(() => {
        const service = services.find((item) => item.id === slug);
        setServices(service);
        setLoading(false);
      }, 1500);
    };
    fetchPromise()
  }, []);

  return (
    <div>
      {loading && <ServiceDetailsSkeleton />}
      <ServiceDetailsPage service={service}></ServiceDetailsPage>
    </div>
  );
};

export default ServiceDetails;
