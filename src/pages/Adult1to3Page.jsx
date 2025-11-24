import React from "react";
import SwimmerReportCard from "../components/SwimmerReportCard";
import { swimmerData } from "../data/Adult1to3";
import templatePDF from "../assets/adult1to3-ReportCard.pdf";
import "../swimmer1to5.css"; // Your existing CSS

function Adult1to3Page() {
  const config = {
    title: "Adult 1-3 Setup",
    levels: ["1", "2", "3", "4"],
    levelLabels: ["Adult 1", "Adult 2", "Adult 3"],
    swimmerData: swimmerData,
    templatePDF: templatePDF,
    levelPrefix: "Adult ",
  };

  return <SwimmerReportCard config={config} />;
}

export default Adult1to3Page;