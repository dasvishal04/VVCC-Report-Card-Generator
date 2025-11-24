import React from "react";
import SwimmerReportCard from "../components/SwimmerReportCard";
import { swimmerData } from "../data/swimmers6to10";
import templatePDF from "../assets/swimmer6to10-ReportCard.pdf";
import "../swimmer1to5.css"; // Create new CSS if different styling needed

function Swimmers6to10Page() {
  const config = {
    title: "Swimmers 6–10 Setup",
    levels: ["6", "7", "8", "9", "10", "11"],
    levelLabels: ["Swimmer 6", "Swimmer 7", "Swimmer 8", "Swimmer 9", "Swimmer 10"],
    swimmerData: swimmerData,
    templatePDF: templatePDF,
    levelPrefix: "Swimmer",
  };

  return <SwimmerReportCard config={config} />;
}

export default Swimmers6to10Page;