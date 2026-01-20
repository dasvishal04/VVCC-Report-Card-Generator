import OpenAI from "openai";

/**
 * Cleans skill strings by removing distances, durations, and extra spaces
 * Examples:
 *  - "glide on back 3 m" → "glide on back"
 *  - "float on back 5 sec" → "float on back"
 */
function cleanSkill(skill = "") {
  return skill
    .replace(/\b\d+\s*(m|meter|meters|sec|secs|seconds)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { formData } = req.body;

    if (!formData || !formData.firstName || !formData.improveSkill) {
      return res.status(400).json({ error: "Invalid form data" });
    }

    // Clean and normalize skills
    const strongSkills = Array.isArray(formData.strongSkills)
      ? formData.strongSkills.map(cleanSkill)
      : [];

    const missingMustSees = Array.isArray(formData.improveMissing)
      ? formData.improveMissing.map(cleanSkill)
      : [];

    const improveSkill = cleanSkill(formData.improveSkill);

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = `
You are generating a swim progress report.

STRICT RULES:
- Output exactly ONE paragraph with exactly FOUR sentences.
- Use complete, grammatically correct sentences.
- Use SIMPLE PAST tense for observed performance.
- Use PRESENT IMPERATIVE tense for encouragement.
- Do NOT use future tense or present perfect tense.
- Do NOT add possessive words (your, their).
- Do NOT add filler phrases such as "when doing your".
- Do NOT add extra commentary or advice.
- Follow the sentence structure exactly as written.
- Format lists naturally using commas and "and" when needed.
- Use a professional, encouraging tone.
- Do NOT repeat the swimmer’s name more than once.

REQUIRED STRUCTURE (copy exactly, only replace bracketed values):

Great job this session, {FirstName}. Excellent work on {StrongSkills}. For the next level, continue to focus on {MissingMustSees} when practicing {ImproveSkill}.  
It was a pleasure teaching you. Keep up the great effort, and best of luck next session!

DATA:
- FirstName: ${formData.firstName}
- StrongSkills: ${strongSkills.length > 0 ? strongSkills.join(", ") : "fundamental skills"}
- ImproveSkill: ${improveSkill}
- MissingMustSees: ${
      missingMustSees.length > 0
        ? missingMustSees.join(", ")
        : "maintaining consistent technique"
    }
`.trim();

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: prompt }],
    });

    return res.status(200).json({
      report: response.choices[0].message.content.trim(),
    });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return res.status(500).json({
      error: "Error generating report. Please try again.",
      details: error.message,
    });
  }
}
