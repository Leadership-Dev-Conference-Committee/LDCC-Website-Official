import React from "react";

const Agenda = () => {
  const stages = [
    {
      stage: "4pm - 5pm: Introductions",
      description:
        "Introduction to the night and events that will be happening.",
      color: "bg-blue-500",
      icon: "📍",
      image: "/path/to/image1.jpg",
    },
    {
      stage: "5pm - 6pm: Resume building workshops",
      description: "Resume Workship presented by:",
      color: "bg-red-500",
      icon: "📝",
      image: "/assets/image1.jpg",
    },
    {
      stage: "6pm - 7pm:",
      description: "Information panel presented by: .",
      color: "bg-orange-500",
      icon: "🔨",
      image: "/assets/image1.jpg",
    },
    {
      stage: "7pm - 8pm: Presentation",
      description: "Workshop presented by: ",
      color: "bg-green-500",
      icon: "📅",
      image: "/assets/image1.jpg",
    },
    {
      stage: "8pm-9m: Networking with professionals",
      description: "Allocated time to network with inudstry professionals",
      color: "bg-purple-500",
      icon: "🏗️",
      image: "/assets/image1.jpg",
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
          <div className="relative flex flex-col gap-24 w-full">
            {stages.map((stage, index) => (
              <div
                key={index}
                className={`flex ${
                  index % 2 == 0 ? "justify-start pr-12" : "justify-end pl-12"
                } items-center relative`}
              >
                {/* Icon */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full text-white ${stage.color}`}
                >
                  {stage.icon}
                </div>

                {/* Content */}
                <div className="w-1/2 flex flex-col items-center gap-12">
                  <h2 className="text-xl font-bold text-gray-800 text-center">
                    {stage.stage}
                  </h2>
                  <p className="text-gray-700 text-center">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
