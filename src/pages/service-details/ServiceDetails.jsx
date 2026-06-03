import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Banner from "../../components/service-details/Banner";
import AboutSection from "../../components/service-details/AboutSection";
import WhyChoose from "../../components/service-details/WhyChoose";
import WorkProcess from "../../components/service-details/WorkProcess";

function ServiceDetails() {
  const { title } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "services")
      .then((response) => {
        const selectedService = response.data.data.find(
          (item) => item.title === decodeURIComponent(title)
        );

        setService(selectedService);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [title]);

  return (
    <>
      <Banner service={service} />
      <AboutSection service={service} />
      <WhyChoose service={service} />
      <WorkProcess service={service} />
    </>
  );
}

export default ServiceDetails;