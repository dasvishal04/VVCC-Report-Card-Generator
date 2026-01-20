import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // ⚠️ for testing only, better to use a backend
});

export async function generateReport(formData) {
  const prompt = `
You are generating a swim progress report.

STRICT RULES:
- Write exactly ONE paragraph.
- Use complete, grammatically correct sentences.
- Use SIMPLE PAST tense for observed performance.
- Use PRESENT IMPERATIVE tense for encouragement.
- Do NOT use future tense or present perfect tense.
- Do NOT add extra commentary or advice.
- Follow the sentence structure exactly as written.
- Use a professional, encouraging tone.
- Do NOT repeat the swimmer’s name more than once.

REQUIRED STRUCTURE (do not alter wording):

"Excellent work this session, {FirstName}. You demonstrated strong ability in {StrongSkills}. Moving forward, continue to focus on {MissingMustSees} when practicing {ImproveSkill}. Keep up the great effort, and best of luck next session!"

DATA:
- FirstName: ${formData.firstName}
- StrongSkills: ${formData.strongSkills.join(", ")}
- ImproveSkill: ${formData.improveSkill}
- MissingMustSees: ${
    formData.missingMustSees.length > 0
      ? formData.missingMustSees.join(", ")
      : "maintaining consistent technique"
  }
`;


  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
}
