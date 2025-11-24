import React from "react";
import SwimmerReportCard from "../components/SwimmerReportCard";
import { swimmerData } from "../data/preschool1to5";
import templatePDF from "../assets/preschool1to5-ReportCard.pdf";
import "../swimmer1to5.css"; // Your existing CSS

function Preschools1to5Page() {
  const config = {
    title: "Preschools 1–5 Setup",
    levels: ["1", "2", "3", "4", "5","6"],
    levelLabels: ["Preschool 1", "Preschool 2", "Preschool 3", "Preschool 4", "Preschool 5"],
    swimmerData: swimmerData,
    templatePDF: templatePDF,
    levelPrefix: "Preschool ",
  };

  return <SwimmerReportCard config={config} />;
}

export default Preschools1to5Page;