import React from "react";
import SwimmerReportCard from "../components/SwimmerReportCard";
import { swimmerData } from "../data/temp_swimmers";
import templatePDF from "../assets/swimmer1to5-ReportCard.pdf";
import "../swimmer1to5.css"; // Your existing CSS

function Swimmers1to5Page() {
  const config = {
    title: "Swimmers 1–5 Setup",
    levels: ["1", "2", "3", "4", "5","6"],
    levelLabels: ["Swimmer 1", "Swimmer 2", "Swimmer 3", "Swimmer 4", "Swimmer 5"],
    swimmerData: swimmerData,
    templatePDF: templatePDF,
    levelPrefix: "Swimmer",
  };

  return <SwimmerReportCard config={config} />;
}

export default Swimmers1to5Page;