// src/components/SwimmerReportCard.jsx
import React, { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

function SwimmerDropdown({ onSelect, levelLabels }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSwimmer, setSelectedSwimmer] = useState("");

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleSelect(swimmer) {
    setSelectedSwimmer(swimmer);
    setIsOpen(false);
    if (onSelect) onSelect(swimmer);
  }

  return (
    <div className="container">
      <div className={`dropdown ${isOpen ? "dropdown-active" : ""}`}>
        <div id="dropdown-btn" onClick={toggleDropdown}>
          <span className="dropdown-name">
            {selectedSwimmer || "Select Swimmer"}
          </span>
        </div>
        {isOpen && (
          <div className="dropdown-menu-box">
            <ul className="dropdown-menu">
              {levelLabels.map((label) => (
                <li
                  key={label}
                  className="dropdown-item"
                  onClick={() => handleSelect(label)}
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function SwimmerReportCard({ config }) {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [step, setStep] = useState(0);
  const [level, setLevel] = useState("");
  const [courseCode, setcourseCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiReport, setAiReport] = useState("");
  const [numPage, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [formData, setFormData] = useState({
    instructor: "",
    firstName: "",
    lastName: "",
    session: "",
    level: "",
    courseCode: "",
    skills: {},
    strongSkills: [],
    improveSkill: "",
    improveMissing: [],
  });

  // Get current swimmer data dynamically based on level
  const currentData = level ? config.swimmerData[level] : null;
  const currentSkillGroups = currentData?.skillGroups || [];
  const currentSkills = currentData?.skills || [];

  // ---- Handlers ----
  const handleSkillChange = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: { ...prev.skills, [skill]: !prev.skills[skill] },
    }));
  };

  const handleStrongSkillToggle = (skill) => {
    setFormData((prev) => {
      let updated = [...prev.strongSkills];
      if (updated.includes(skill)) {
        updated = updated.filter((s) => s !== skill);
      } else if (updated.length < 2) {
        updated.push(skill);
      }
      return { ...prev, strongSkills: updated };
    });
  };

  const handleImproveSkillSelect = (skill) => {
    setFormData((prev) => ({ ...prev, improveSkill: skill }));
  };

  const handleMissingToggle = (mustSee) => {
    setFormData((prev) => {
      let updated = [...prev.improveMissing];
      if (updated.includes(mustSee)) {
        updated = updated.filter((m) => m !== mustSee);
      } else {
        updated.push(mustSee);
      }
      return { ...prev, improveMissing: updated };
    });
  };

  // ---- AI Report Generator ----
  const generateAIReport = async () => {
  setLoading(true);
  try {
    const response = await fetch('/api/generate-report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData }),
    });

    const data = await response.json();
    
    if (data.error) {
      console.error('API Error:', data.details);
      setAiReport(data.error);
    } else {
      setAiReport(data.report);
    }
  } catch (err) {
    console.error('Fetch error:', err);
    setAiReport("Error generating report. Please try again.");
  }
  setLoading(false);
};

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  // ---- PDF Preview ----
  const handlePreview = async () => {
    try {
      const existingPdfBytes = await fetch(config.templatePDF).then((res) => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const [firstPage, secondPage] = pdfDoc.getPages();
      const { height } = firstPage.getSize();

      // Get current level's data
      const checkboxPositions = currentData.checkboxPositions;
      const highlightPositions = currentData.highlightPositions;

      const passedSkills = currentSkills.filter((s) => formData.skills[s.skill]);
      const failedSkills = currentSkills.filter((s) => !formData.skills[s.skill]);
      const passedSkillIds = passedSkills.map((s) => s.id);
      const failedSkillIds = failedSkills.map((s) => s.id);

      // Draw student info on page 1
      firstPage.drawText(`${formData.firstName} ${formData.lastName}`, {
        x: 427, y: 85, size: 16, color: rgb(0, 0, 0),
      });

      firstPage.drawText(`${config.levelPrefix} ${level}`, {
        x: 665, y: 85, size: 16, color: rgb(0, 0, 0),
      });

      firstPage.drawText(`${formData.session}`, {
        x: 295, y: 449, size: 12, color: rgb(0, 0, 0),
      });

      firstPage.drawText(`${formData.instructor}`, {
        x: 92, y: 449, size: 12, color: rgb(0, 0, 0),
      });

     // Next Level logic
const currentLevelNum = parseInt(level);
let nextLevel;

// If any skills failed, stay at current level
if (failedSkills.length > 0) {
  nextLevel = `${config.levelPrefix} ${currentLevelNum}`;
} else {
  // All skills passed - move to next level
  const nextLevelNum = currentLevelNum + 1;
  
  // Check if next level exists in config
  nextLevel = config.levels.includes(nextLevelNum.toString())
    ? `${config.levelPrefix} ${nextLevelNum}`
    : `${config.levelPrefix} ${currentLevelNum}`;

  // Special case overrides (only apply when advancing)
  if (nextLevelNum === 11 && config.levelPrefix === "Swimmer") {
    nextLevel = "Bronze Medallion";
  }
  if (nextLevelNum === 4 && config.levelPrefix === "Parent & Tot "){
    nextLevel = "Preschool 1 (Registration based on age)";
  }
  if (nextLevelNum === 6 && config.levelPrefix === "Preschool "){
    nextLevel = "Swimmer 2";
  }
  if (nextLevelNum === 4 && (config.levelPrefix === "Adult " || config.levelPrefix === "Teen ")){
    nextLevel = "";
  }
}

firstPage.drawText(nextLevel, {
  x: 20, y: 400, size: 12, color: rgb(0, 0, 0),
});

      // AI feedback box
      if (aiReport) {
        const textBoxX = 18;
        const textBoxY = height - 140;
        const textBoxWidth = 360;
        const textBoxHeight = 100;

        firstPage.drawRectangle({
          x: textBoxX, y: textBoxY,
          width: textBoxWidth, height: textBoxHeight,
          color: rgb(0.95, 0.95, 0.95),
          borderColor: rgb(0.8, 0.8, 0.8),
          borderWidth: 1,
        });

        const calculateFontSize = (text, maxWidth, maxHeight, minFont = 6, maxFont = 14) => {
          let fontSize = maxFont;
          while (fontSize >= minFont) {
            const charWidth = fontSize * 0.45;
            const lineHeight = fontSize * 1.5;
            const charsPerLine = Math.floor(maxWidth / charWidth);

            const words = text.split(" ");
            let lines = [], current = "";

            for (const word of words) {
              const testLine = current ? `${current} ${word}` : word;
              if (testLine.length <= charsPerLine) {
                current = testLine;
              } else {
                if (current) lines.push(current);
                current = word;
              }
            }
            if (current) lines.push(current);

            if (lines.length * lineHeight <= maxHeight) {
              return { fontSize, lines, lineHeight };
            }
            fontSize -= 0.3;
          }
          return { fontSize: minFont, lines: text.split(" "), lineHeight: minFont * 1.2 };
        };

        const { fontSize, lines, lineHeight } = calculateFontSize(aiReport, textBoxWidth - 7, textBoxHeight - 7);
        const startY = textBoxY + textBoxHeight - 5 - fontSize;

        lines.forEach((line, i) => {
          const y = startY - i * lineHeight;
          if (y >= textBoxY + 5) {
            firstPage.drawText(line, { x: textBoxX + 5, y, size: fontSize, color: rgb(0, 0, 0) });
          }
        });
      }

      // Draw checkboxes on page 2
      const drawSkillCheckboxes = (page, passedIds) => {
        checkboxPositions.forEach(({ id, x, y }) => {
          page.drawRectangle({ x, y, width: 8, height: 8, borderColor: rgb(0, 0, 0), borderWidth: 1, color: rgb(1, 1, 1) });
          if (passedIds.includes(id)) {
            page.drawLine({ start: { x: x + 2, y: y + 5 }, end: { x: x + 5, y: y + 2 }, thickness: 2, color: rgb(0, 0, 0) });
            page.drawLine({ start: { x: x + 5, y: y + 2 }, end: { x: x + 10, y: y + 10 }, thickness: 2, color: rgb(0, 0, 0) });
          }
        });
      };

      const highlightFailedSkills = (page, failedIds) => {
        highlightPositions.forEach(({ id, x, y, width, height }) => {
          if (failedIds.includes(id)) {
            page.drawRectangle({ x, y, width, height, color: rgb(1, 1, 0.6), opacity: 0.3 });
          }
        });
      };

      drawSkillCheckboxes(secondPage, passedSkillIds);
      highlightFailedSkills(secondPage, failedSkillIds);

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error("Error generating preview:", err);
      alert("Failed to generate preview. Check console for details.");
    }
  };

  const handleDownload = () => {
    if (!previewUrl) {
      alert("Please generate a preview first!");
      return;
    }
    
    const link = document.createElement("a");
    link.href = previewUrl;
    link.download = `${courseCode}_${formData.firstName}_${formData.lastName}_${config.levelPrefix}${level}.pdf`;
    link.click();
  };

  // ---- STEP 0: Setup ----
  if (step === 0) {
    const handleSwimmerSelect = (swimmer) => {
      const num = swimmer.split(" ").pop(); // Get last word (the number)
      setLevel(num);
    };

    return (
      <div className="p-6">
        <h1 style={{textAlign:"Center",color:"white"}}>{config.title}</h1>
        <div className="mb-4">
          <SwimmerDropdown onSelect={handleSwimmerSelect} levelLabels={config.levelLabels} />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            className="code-input"
            placeholder="Enter Course Code..."
            value={courseCode}
            onChange={(e) => setcourseCode(e.target.value)}
          />
        </div>
        <div className="continue-wrapper">
          <button
            className="continue-btn"
            onClick={() => setStep(1)}
            disabled={!level}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  // ---- STEP 1: Info + Skills ----
if (step === 1) {

  const toggleSelectAll = (groupSkills, checked) => {
    setFormData((prev) => {
      const updatedSkills = { ...prev.skills };

      groupSkills.forEach((s) => {
        updatedSkills[s.skill] = checked;
      });

      return {
        ...prev,
        skills: updatedSkills,
      };
    });
  };

  return (
    <div className="p-6">
      <h1 className="swimmer-headding">
        {config.levelPrefix} {level} Report Card
      </h1>

      <div className="step1-wrapper">
        <label className="sub-text">Instructor Name:</label>
        <input
          type="text"
          className="step1-input"
          value={formData.instructor}
          onChange={(e) =>
            setFormData({ ...formData, instructor: e.target.value })
          }
        />
      </div>

      <div className="step1-wrapper">
        <label className="sub-text">Swimmer First Name:</label>
        <input
          type="text"
          className="step1-input"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
      </div>

      <div className="step1-wrapper">
        <label className="sub-text">Swimmer Last Name:</label>
        <input
          type="text"
          className="step1-input"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
      </div>

      <div className="step1-wrapper">
        <label className="sub-text">Session:</label>
        <input
          type="text"
          className="step1-input"
          value={formData.session}
          onChange={(e) =>
            setFormData({ ...formData, session: e.target.value })
          }
        />
      </div>

      <h2 className="swimmer-headding">Select Passed Skills</h2>

      <div className="space-y-4">
        {currentSkillGroups.map((group) => (
          <div
            key={group.category}
            className="border rounded-lg p-4 bg-white"
          >
            {/* Category Header + Select All */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="sub-text">{group.category}</h3>

              <label className="flex items-center text-sm cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={group.skills.every(
                    (s) => formData.skills[s.skill]
                  )}
                  onChange={(e) =>
                    toggleSelectAll(group.skills, e.target.checked)
                  }
                />
                Select all
              </label>
            </div>

            {/* Individual Skills */}
            <div className="space-y-2">
              {group.skills.map((s) => (
                <label key={s.id} className="skills">
                  <input
                    type="checkbox"
                    checked={formData.skills[s.skill] || false}
                    onChange={() => handleSkillChange(s.skill)}
                    className="mr-3 mt-1 flex-shrink-0"
                  />
                  <div className="flex-grow">
                    <div className="font-medium">{s.skill}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="continue-wrapper mt-6">
        <button
          onClick={() => setStep(0)}
          className="skills-continue bg-gray-500 text-white mr-2"
        >
          Back
        </button>

        <button
          disabled={
            Object.keys(formData.skills).filter(
              (s) => formData.skills[s]
            ).length === 0
          }
          onClick={() => setStep(2)}
          className={`skills-continue ${
            Object.keys(formData.skills).filter(
              (s) => formData.skills[s]
            ).length > 0
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

  // ---- STEP 2: Strong + Improve ----
  if (step === 2) {
    const passedSkills = currentSkills.filter((s) => formData.skills[s.skill]);
    const failedSkills = currentSkills.filter((s) => !formData.skills[s.skill]);

    return (
      <div className="p-6">
        <h2 className="swimmer-headding">Skills Evaluation</h2>

        <h3 className="sub-text">Select 2 Strong Skills</h3>
        <div className="space-y-2 mb-6">
          {passedSkills.map((s) => (
            <label
              key={s.skill}
              className={`skills ${
                formData.strongSkills.includes(s.skill) ? "bg-green-200" : "bg-gray-100"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.strongSkills.includes(s.skill)}
                onChange={() => handleStrongSkillToggle(s.skill)}
                disabled={
                  !formData.strongSkills.includes(s.skill) &&
                  formData.strongSkills.length >= 2
                }
                className="mr-2"
              />
              {s.skill}
            </label>
          ))}
        </div>

        <h3 className="sub-text">Select 1 Skill to Improve On</h3>
        <div className="">
          {(failedSkills.length > 0 ? failedSkills : passedSkills).map((s) => (
            <label
              key={s.skill}
              className={`skills ${
                formData.improveSkill === s.skill ? "bg-red-200" : "bg-gray-100"
              }`}
            >
              <input
                type="radio"
                name="improveSkill"
                checked={formData.improveSkill === s.skill}
                onChange={() => handleImproveSkillSelect(s.skill)}
                className="mr-2"
              />
              {s.skill}
            </label>
          ))}
        </div>

        <button
          onClick={() => setStep(1)}
          className="skills-continue bg-gray-500 text-white mr-2"
        >
          Back
        </button>
        <button
          disabled={formData.strongSkills.length !== 2 || !formData.improveSkill}
          onClick={() => setStep(3)}
          className={`skills-continue ${
            formData.strongSkills.length === 2 && formData.improveSkill
              ? "bg-blue-500 text-white"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    );
  }

  // ---- STEP 3: Select Missing Must-Sees ----
  if (step === 3) {
    const improveSkillObj = currentSkills.find(
      (s) => s.skill === formData.improveSkill
    );
    const mustSees = improveSkillObj?.mustSee || [];

    return (
      <div className="p-6">
        <h2 className="swimmer-headding">Must-See Evaluation</h2>
        <p className="sub-text">
          For <strong>{formData.improveSkill}</strong>, select which must-see
          requirements you would like to comment on.
        </p>

        {mustSees.length > 0 ? (
          <div className="space-y-2">
            {mustSees.map((ms) => (
              <label key={ms} className="skills">
                <input
                  type="checkbox"
                  checked={formData.improveMissing.includes(ms)}
                  onChange={() => handleMissingToggle(ms)}
                  className="mr-2"
                />
                {ms}
              </label>
            ))}
          </div>
        ) : (
          <p className="sub-text"> No must-sees defined for this skill click "continue".</p>
        )}

        <button
          onClick={() => setStep(2)}
          className="skills-continue bg-gray-500 text-white mr-2"
        >
          Back
        </button>
        <button
          onClick={() => setStep(4)}
          className="skills-continue"
        >
          Continue
        </button>
      </div>
    );
  }

  // ---- STEP 4: AI Report ----
  if (step === 4) {
    return (
      <div className="p-6">
        <h2 className="swimmer-headding">Final Report Summary</h2>
        
        <button
          onClick={generateAIReport}
          disabled={loading}
          className="skills-continue"
        >
          {loading ? "Generating..." : "Generate AI Report"}
        </button>
        
        <div className="mb-4">
          <label className="sub-text">AI Report (You can edit this):</label>
          <div className="ai-wrapper">
            <textarea
              value={aiReport}
              onChange={(e) => setAiReport(e.target.value)}
              className="ai-report"
              placeholder="AI report will appear here once generated..."
              rows={10}
            />
          </div>
          <p className="sub-text">
            You can modify the AI-generated report above before proceeding.
          </p>
        </div>
        
        <button
          onClick={() => setStep(3)}
          className="skills-continue bg-gray-500 text-white mr-2"
        >
          Back
        </button>
        <button
          onClick={() => setStep(5)}
          disabled={!aiReport}
          className={`skills-continue ${
            aiReport 
              ? "bg-blue-500 text-white" 
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    );
  }

  // ---- STEP 5: Export + Preview ----
  if (step === 5) {
    return (
      <div className="p-6">
        <h2 className="swimmer-headding">Export Report</h2>

        {aiReport && (
          <div className="sub-text">
            <h3 className="sub-text">AI Report:</h3>
            {aiReport}
          </div>
        )}

        <div className="mb-4 space-x-2">
          <button
            onClick={() => setStep(4)}
            className="skills-continue bg-gray-500 text-white"
          >
            Back
          </button>
          <button onClick={handlePreview} className="skills-continue">
            Generate Preview
          </button>
          
          <button
            onClick={handleDownload}
            disabled={!previewUrl}
            className={`skills-continue ${
              previewUrl 
                ? "bg-green-600 text-white" 
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
          >
            Download PDF
          </button>
        </div>

        {previewUrl && (
          <div className="pdf-preview mt-6">
            <div className="mb-4">
              <h3 className="sub-text">PDF Preview:</h3>
              
              <div className="flex items-center justify-center space-x-4 mb-4 p-3 bg-gray-100 rounded">
                <button 
                  onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                  disabled={pageNumber <= 1}
                  className="skills-continue"
                >
                  Previous
                </button>
                
                <div className="flex items-center space-x-2">
                  <span className="sub-text">Page</span>
                  <select
                    value={pageNumber}
                    onChange={(e) => setPageNumber(parseInt(e.target.value))}
                    className="border rounded px-2 py-1 text-sm"
                  >
                    {numPage && Array.from({ length: numPage }, (_, i) => i + 1).map(page => (
                      <option key={page} value={page}>{page}</option>
                    ))}
                  </select>
                  <span className="sub-text">of {numPage || '?'}</span>
                </div>
                
                <button 
                  onClick={() => setPageNumber(Math.min(numPage || 1, pageNumber + 1))}
                  disabled={pageNumber >= (numPage || 1)}
                  className="skills-continue"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="border rounded bg-white shadow-lg">
              <Document 
                file={previewUrl} 
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div className="p-8 text-center">Loading PDF preview...</div>}
                error={<div className="p-8 text-center text-red-600">Failed to load PDF</div>}
              >
                <Page 
                  pageNumber={pageNumber} 
                  height={600}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="mx-auto"
                />
              </Document>
            </div>

            {numPage && (
              <div className="mt-4 text-center text-sm text-gray-600">
                Showing page {pageNumber} of {numPage}
                {pageNumber === 1 && " (Student Information & Feedback)"}
                {pageNumber === 2 && " (Skills Assessment)"}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default SwimmerReportCard;