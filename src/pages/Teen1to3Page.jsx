import React from "react";
import SwimmerReportCard from "../components/SwimmerReportCard";
import { swimmerData } from "../data/Adult1to3";
import templatePDF from "../assets/teen1to3-ReportCard.pdf";
import "../swimmer1to5.css"; // Your existing CSS

function Teen1to3Page() {
  const config = {
    title: "Teen 1-3 Setup",
    levels: ["1", "2", "3", "4"],
    levelLabels: ["Teen 1", "Teen 2", "Teen 3"],
    swimmerData: swimmerData,
    templatePDF: templatePDF,
    levelPrefix: "Teen ",
  };

  return <SwimmerReportCard config={config} />;
}

export default Teen1to3Page;