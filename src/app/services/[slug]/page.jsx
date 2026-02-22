import ServiceDetailsPage from "@/component/card/ServiceDetailsPage";
import { getSingleService } from "@/action/server/services";
import React from "react";

const ServiceDetails = async ({ params }) => {
  const { slug } = await params;
  const service = await getSingleService(slug);
  return (
    <div>
      <ServiceDetailsPage
        service={JSON.parse(JSON.stringify(service))}
      ></ServiceDetailsPage>
    </div>
  );
};

export default ServiceDetails;
