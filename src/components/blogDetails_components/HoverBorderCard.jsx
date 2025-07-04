import React from "react";
import details from "../../assets/images/details.png";
const HoverBorderCard = () => {
  const articles = [
    {
      id: 1,
      title:
        "Understanding Exactly How Hydronic Heating Systems Work: The Basics for Homeowners",
      image: details,
      content:
        "For you to seamlessly upgrade your heating system today, you need to understand your property's suitability. Is your home compatible with an air source heat pump? To find an answer to this question, you need to consider different factors, including:",
    },
    {
      id: 2,
      title:
        "Geothermal Heating Maintenance: Tips for Maintaining Maximum Efficiency & Longevity",
      image: details,
      content:
        "You should consider choosing an air-to-water heat pump if you need to heat a lot of radiators and underfloor heating. An air-to-air heat pump, on the other hand, are ideal for heating or cooling air directly.",
    },
    {
      id: 3,
      title: "Understanding Geothermal Heating and Cooling",
      image: details,
      content:
        "Call SoGee today to better understand how to make a seamless transition to an air source heat pump in Melbourne.",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
      {/* Left Column - Text Content */}
      <div className="space-y-6">
        <div className=" p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            1. What exactly is suitable for your property
          </h2>
          <p className="text-gray-600 mb-4">
            For you to seamlessly upgrade your heating system today, you need to
            understand your property's suitability. Is your home compatible with
            an air source heat pump? To find an answer to this question, you
            need to consider different factors, including:
          </p>
          <ul className="space-y-2 text-gray-600 mb-4">
            <li>• Heating system layout</li>
            <li>• Insulation</li>
            <li>• Heat loss analysis</li>
            <li>• Availability of outdoor space</li>
          </ul>
          <p className="text-gray-600 mb-4">
            If you have enough space, then you please speak with us at SoGee. We
            will evaluate your property's readiness and in installing the best
            pump to maximize energy efficient.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Identifying the right air source heat pump
          </h3>
          <p className="text-gray-600 mb-4">
            What exactly is the right air source heat pump for your home or
            commercial property? The answer to this question depends on your
            needs.
          </p>
          <p className="text-gray-600 mb-4">
            You have two options when it comes to choosing air source heat
            pumps:
          </p>
          <ul className="space-y-2 text-gray-600 mb-4">
            <li>• Air-to-water heat pump</li>
            <li>• Air-to-air heat pump</li>
          </ul>
          <p className="text-gray-600 mb-4">
            You should consider choosing an air-to-water heat pump if you need
            to heat a lot of radiators and underfloor heating. An air-to-air
            heat pump, on the other hand, are ideal for heating or cooling air
            directly. You should consider the latter if your property doesn't
            have a central heating system.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            2. Why professional technicians
          </h3>
          <p className="text-gray-600 mb-4">
            Choosing the right heat pump is never enough when it comes to
            upgrading to an air-source heat pump system. In addition, you also
            need to install the system the right way. Here's where the
            importance of working with professional technicians at SoGee comes
            in.
          </p>
          <p className="text-gray-600 mb-4">
            SoGee certified installers have many years of experience. We can
            rely on them to have you heating unit installed correctly. Proper
            installation won't only maximise efficiency, but also lower noise.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            3. Get familiar with the installation process
          </h3>
          <p className="text-gray-600 mb-4">
            Below are the steps necessary to install an air source heat pump
            today:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>
              • The installation process often starts with the placement of the
              outdoor unit in an open area.
            </li>
            <li>
              • Next, the heat pump is connected to the heating system -
              radiator or underfloor heating.
            </li>
            <li>
              • Finally, the system is connected to the electrical supply. This
              setup is necessary to keep operation efficacious.
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column - Image Cards */}
      <div className="space-y-6">
        {articles.map((article) => (
          <div key={article.id} className="relative group cursor-pointer">
            {/* Card Content */}
            <div className="relative group rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.01] max-w-[700px]">
              <div className="relative h-[500px] w-full">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

                {/* Text content */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {article.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverBorderCard;
