import ServiceDetailsPage from "@/component/card/ServiceDetailsPage";
import { getSingleService } from "@/action/server/services";
import React from "react";


export async function generateMetadata({ params }) {
  const {slug} = await params
  const service = await getSingleService(slug)
  console.log(service);

  if (!service) {
    return {
      title: "Service Not Found | Care Haven"
    };
  }

  return {
    title: `${service.title} | Care Haven`,
    description: service.description,

    openGraph: {
      title: service.title,
      description: service.description,
      images: [
        {
          url: service?.media?.thumbnail || "/images/default.png",
          width: 1200,
          height: 630
        }
      ]
    },

    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: [service?.media?.thumbnail]
    }
  };
}

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
