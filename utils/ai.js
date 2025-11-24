import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // ⚠️ for testing only, better to use a backend
});

export async function generateReport(formData) {
  const prompt = `
  Write a swim progress report in complete sentences based on this information:
  - Instructor: ${formData.instructor}
  - Swimmer: ${formData.firstName} ${formData.lastName}
  - Session: ${formData.session}
  - Strong Skills: ${formData.strongSkills.join(", ")}
  - Needs Improvement: ${formData.improveSkill}
  - Missing Must-Sees: ${formData.missingMustSees.join(", ") || "None"}
  `;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
}
