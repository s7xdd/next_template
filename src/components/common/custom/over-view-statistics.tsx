"use client";

import Link from "next/link";
import React, { JSX } from "react";

export const OverviewStatistics: React.FC<{
  statistics: {
    label: string;
    value: number;
    icon: JSX.Element;
    link: string;
  }[];
}> = ({ statistics }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statistics &&
        statistics.map((stat, index) => (
          <Link
            key={index}
            className="group flex flex-col items-center justify-center bg-gray-50 rounded-lg p-4 shadow-md transition-transform transform hover:scale-105 hover:bg-blue-50 hover:shadow-lg"
            href={stat?.link}
          >
            <div className="text-3xl group-hover:text-blue-600 transition-colors">
              {stat?.icon}
            </div>
            <div className="text-sm font-medium text-gray-700 mt-2 group-hover:text-blue-700 transition-colors">
              {stat?.label}
            </div>
            <div className="text-2xl font-bold text-gray-900 mt-1 group-hover:text-blue-800 transition-colors">
              {stat?.value}
            </div>
          </Link>
        ))}
    </div>
  );
};
