import React from "react";

const Agenda = () => {
  const stages = [
    {
      stage: "4pm - 5pm: Introductions",
      description:
        "Introduction to the night and events that will be happening.",
      color: "bg-blue-500",
      icon: "📍",
      image: "/src/assets/about-img1.png",
    },
    {
      stage: "5pm - 6pm: Resume building workshops",
      description: "Resume Workship presented by:",
      color: "bg-red-500",
      icon: "📝",
      image: "/src/assets/about-img2.png",
    },
    {
      stage: "6pm - 7pm:",
      description: "Information panel presented by: .",
      color: "bg-orange-500",
      icon: "🔨",
      image: "/src/assets/about-img1.png",
    },
    {
      stage: "7pm - 8pm: Presentation",
      description: "Workshop presented by: ",
      color: "bg-green-500",
      icon: "📅",
      image: "/src/assets/about-img2.png",
    },
    {
      stage: "8pm - 9pm: Networking with professionals",
      description: "Allocated time to network with inudstry professionals",
      color: "bg-purple-500",
      icon: "🏗️",
      image: "/src/assets/about-img1.png",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-orange-50 p-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-16">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Agenda for the Conference
        </h1>

        {/* Timeline */}
        <div className="relative w-full flex justify-center">
          {/* Vertical Bar */}
          <div className="absolute w-1 bg-gray-300 h-full"></div>

          {/* Stages */}
          <div className="relative flex flex-col w-full">
            {stages.map((stage, index) => {
              let justifyClass = "justify-end"; 
              if (index % 2 === 0) {
                justifyClass = "justify-start";
              }

              return (
                <div
                  key={index}
                  className={`flex ${justifyClass} items-center relative w-full`}
                >
                  {/* Icon */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full text-white ${stage.color}`}
                  >
                    {stage.icon}
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col items-center gap-4 w-[40%] ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <h2 className="text-xl font-bold text-gray-800">
                      {stage.stage}
                    </h2>
                    <p className="text-gray-700 text-center">{stage.description}</p>

                    {/* Image Section */}
                    {stage.image && (
                      <div className="flex justify-center mt-4">
                        <img
                          src={stage.image}
                          className="w-full max-w-sm rounded-lg shadow-lg"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
