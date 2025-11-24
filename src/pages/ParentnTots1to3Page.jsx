import React from "react";
import SwimmerReportCard from "../components/SwimmerReportCard";
import { swimmerData } from "../data/Parent_n_Tots1to3";
import templatePDF from "../assets/parent&tot_1to3-ReportCard.pdf";
import "../swimmer1to5.css"; // Your existing CSS

function ParentnTots1to3Page() {
  const config = {
    title: "Parent & Tot 1-3 Setup",
    levels: ["1", "2", "3", "4"],
    levelLabels: ["Parent & Tot 1", "Parent & Tot 2", "Parent & Tot 3"],
    swimmerData: swimmerData,
    templatePDF: templatePDF,
    levelPrefix: "Parent & Tot ",
  };

  return <SwimmerReportCard config={config} />;
}

export default ParentnTots1to3Page;