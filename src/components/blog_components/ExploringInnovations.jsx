import React from "react";
import ExploringInnovationsCard from "./ExploringInnovationsCard";

const ExploringInnovations = ({isLoading,blogs}) => {
  return (
    <section className="section-padding-y section-padding-x relative">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-Primary">
          Exploring Innovations in Heating, Cooling & Energy Efficiency
        </h2>
      </div>

      <p className="text-lg text-gray-600 mt-4 text-center max-w-5xl mx-auto mb-16">
        Discover the latest innovations in heating, cooling, and energy
        efficiency. Our blog shares practical tips, trends, and expert insights
        to help you create a more comfortable, eco-friendly, and cost-effective
        space.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ExploringInnovationsCard data={blogs} isLoading={isLoading} />
      </div>
    </section>
  );
};

export default ExploringInnovations;
