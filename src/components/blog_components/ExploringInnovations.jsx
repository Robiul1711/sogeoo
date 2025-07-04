import React from "react";
import ExploringInnovationsCard from "./ExploringInnovationsCard";
import explore from '../../assets/images/explore.png'
const data = [
    {
        id: 1,
        image: explore,
        date: 'Fed 24, 2025',
        title: 'Enhanced Features for a Better Experience',
        description:"Our platform is designed with user convenience in mind. From advanced progress tracking and interactive quizzes to real-time feedback and certificate generation, we’ve added features that make learning more engaging and effective. "
    },
    {
        id: 2,
        image: explore,
        date: 'Fed 24, 2025',
        title: 'Enhanced Features for a Better Experience',
        description:"Our platform is designed with user convenience in mind. From advanced progress tracking and interactive quizzes to real-time feedback and certificate generation, we’ve added features that make learning more engaging and effective. "
    },
    {
        id: 3,
        image: explore,
        date: 'Fed 24, 2025',
        title: 'Enhanced Features for a Better Experience',
        description:"Our platform is designed with user convenience in mind. From advanced progress tracking and interactive quizzes to real-time feedback and certificate generation, we’ve added features that make learning more engaging and effective. "
    },
    {
        id: 4,
        image: explore,
        date: 'Fed 24, 2025',
        title: 'Enhanced Features for a Better Experience',
        description:"Our platform is designed with user convenience in mind. From advanced progress tracking and interactive quizzes to real-time feedback and certificate generation, we’ve added features that make learning more engaging and effective. "
    },
    {
        id: 5,
        image: explore,
        date: 'Fed 24, 2025',
        title: 'Enhanced Features for a Better Experience',
        description:"Our platform is designed with user convenience in mind. From advanced progress tracking and interactive quizzes to real-time feedback and certificate generation, we’ve added features that make learning more engaging and effective. "
    },
    {
        id: 6,
        image: explore,
        date: 'Fed 24, 2025',
        title: 'Enhanced Features for a Better Experience',
        description:"Our platform is designed with user convenience in mind. From advanced progress tracking and interactive quizzes to real-time feedback and certificate generation, we’ve added features that make learning more engaging and effective. "
    },

]
const ExploringInnovations = () => {
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
        <ExploringInnovationsCard data={data} />
      </div>
    </section>
  );
};

export default ExploringInnovations;
