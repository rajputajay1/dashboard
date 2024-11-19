import React from "react";

function EntrepreneurialSkillsGauge() {
  const percentage = 73; // Replace with your desired percentage

  return (
    <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-4">
      <div class="text-center mb-4">
        <h3 class="text-xl font-semibold">
          How Strong your Entrepreneurial skills?
        </h3>
      </div>
      <div class="flex justify-center">
        <div class="relative h-40 w-40">
          <svg class="h-full w-full -rotate-90 transform" viewBox="0 0 42 42">
            <circle
              cx="21"
              cy="21"
              r="15.91549430918954"
              fill="transparent"
              stroke="#e2e8f0"
              stroke-width="3"
            />
            <circle
              cx="21"
              cy="21"
              r="15.91549430918954"
              fill="transparent"
              stroke="#ec4899"
              stroke-width="3"
              stroke-dasharray="36.5 100"
              stroke-linecap="round"
            />
          </svg>
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <span class="text-2xl font-bold">73%</span>
            <span class="text-sm text-gray-500">Creative</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntrepreneurialSkillsGauge;
