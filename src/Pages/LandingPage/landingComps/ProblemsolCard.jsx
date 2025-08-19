import React, { useState } from "react";

const problems = [
  {
    id: 1,
    problem: {
      title: "Global CDN",
      cause: "Content is being served from a single region.",
      impact: "Users far from your server experience slow loading times.",
    },
    solution: {
      title: "Global CDN Solution",
      fix: "Distribute content across global edge locations.",
      result: "Lightning-fast delivery with 99.9% uptime worldwide.",
      cta: "Boost My Speed",
    },
  },
  {
    id: 2,
    problem: {
      title: "Database Optimization",
      cause: "Unoptimized queries and missing indexes.",
      impact: "High query latency, slow dashboards, and timeouts.",
    },
    solution: {
      title: "Database Optimization",
      fix: "Automated query optimization and smart indexing.",
      result: "Blazing-fast queries and scalable database performance.",
      cta: "Optimize My DB",
    },
  },
  {
    id: 3,
    problem: {
      title: "DevOps Automation",
      cause: "Manual deployments with inconsistent workflows.",
      impact: "Frequent downtimes, human errors, and delayed releases.",
    },
    solution: {
      title: "DevOps Automation",
      fix: "Streamlined CI/CD pipeline with automated testing.",
      result: "Reliable deployments, faster releases, and reduced downtime.",
      cta: "Automate My DevOps",
    },
  },
];

export default function ProblemSolutionCards() {
  const [flippedId, setFlippedId] = useState(null);

  const handleFlip = (id) => {
    setFlippedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-8">
      

      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((item) => (
          <div
            key={item.id}
            className="w-80 h-96 perspective"
            onClick={() => handleFlip(item.id)}
          >
            <div
              className={`relative w-full h-full duration-500 transform-style-preserve-3d cursor-pointer ${
                flippedId === item.id ? "rotate-y-180" : ""
              }`}
            >
              {/* Problem Side */}
              <div className="absolute w-full h-full bg-white text-gray-900 rounded-2xl shadow-lg p-6 flex flex-col justify-between backface-hidden">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold  mb-2 sm:mb-3 lg:mb-4">
                    {item.problem.title}
                  </h3>
                  <p className="mb-4 sm:mb-6 lg:mb-8 text-lg leading-relaxed">
                    <span className="font-semibold text-red-600">Cause:</span>{" "}
                    {item.problem.cause}
                  </p>
                  <p className="mb-4 sm:mb-6 lg:mb-8 text-lg leading-relaxed">
                    <span className="font-semibold text-orange-600">Impact:</span>{" "}
                    {item.problem.impact}
                  </p>
                </div>
                <button className="mt-4 self-end px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
                  Reveal Solution →
                </button>
              </div>

              {/* Solution Side */}
              <div className="absolute w-full h-full bg-white text-gray-900 rounded-2xl shadow-lg p-6 flex flex-col justify-between rotate-y-180 backface-hidden">
                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlippedId(null);
                    }}
                    className="text-sm text-gray-500 hover:text-gray-700 mb-2"
                  >
                    ← Back
                  </button>
                  <h3 className="text-xl font-bold text-navy-800">
                    {item.solution.title}
                  </h3>
                  <p className="mt-3 text-gray-700">
                    <span className="font-semibold text-green-600">Solution:</span>{" "}
                    {item.solution.fix}
                  </p>
                  <p className="mt-2 text-gray-700">
                    <span className="font-semibold text-blue-600">Result:</span>{" "}
                    {item.solution.result}
                  </p>
                </div>
                <button className="mt-4 self-end px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                  {item.solution.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
