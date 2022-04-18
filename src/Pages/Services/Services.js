import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container my-5 bg-light" id="services">
      <h3 className="text-center text-success my-3 p-2">MY SERVICES </h3>
      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
      <div className="mx-auto w-25 mb-3 p-3">
        <btn className="btn btn-pill w-100 mx-auto p-2 g-btn">
          DISCOVER ALL TOURS
        </btn>
      </div>
    </div>
  );
};

export default Services;
