"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

interface StatisticCardProps {
  title: string;
  value: number | string;
  comparisonValue: number;
  comparisonLabel: string;
  isPositiveTrend: boolean;
  viewAllLink: string;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  value,
  comparisonValue,
  comparisonLabel,
  isPositiveTrend,
  viewAllLink,
}) => {
  const trendColor = isPositiveTrend ? "green-500" : "red-500";
  const TrendIcon = isPositiveTrend ? ArrowUpward : ArrowDownward;
  const progressValue = Math.abs(comparisonValue);

  return (
    <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root shadow-xl rounded-md">
      <div className="MuiCardContent-root p-4">
        <h6 className="MuiTypography-root MuiTypography-h6 text-sm font-bold">
          {title}
        </h6>
        <h5 className="MuiTypography-root MuiTypography-h5 text-2xl font-bold mt-2">
          {value}
        </h5>
        <div className="flex justify-between items-center mt-2">
          <p className="MuiTypography-root MuiTypography-body2 text-sm text-gray-600 mr-2">
            {comparisonLabel}
          </p>
          <p
            className={`MuiTypography-root MuiTypography-body2 text-sm ${trendColor} flex items-center`}
          >
            <TrendIcon
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall mr-1"
              fontSize="small"
            />
            {comparisonValue >= 0 ? "+" : ""}
            {comparisonValue} ({(comparisonValue * 100)}%)
          </p>
        </div>
        <div className="mt-4">
          <span
            className={`MuiLinearProgress-root MuiLinearProgress-color${isPositiveTrend ? "Success" : "Error"} MuiLinearProgress-determinate`}
            role="progressbar"
            aria-valuenow={progressValue}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span
              className={`MuiLinearProgress-bar MuiLinearProgress-barColor${isPositiveTrend ? "Success" : "Error"} MuiLinearProgress-bar1Determinate`}
              style={{ transform: `translateX(-${100 - progressValue}%)` }}
            />
          </span>
        </div>
        <div className="mt-4">
          <Link
            href={viewAllLink}
            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways text-blue-500 text-sm"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};
