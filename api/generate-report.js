import OpenAI from "openai";

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { formData } = req.body;

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = `
Write a professional swimming progress report.

Instructor: ${formData.instructor}
Swimmer: ${formData.firstName} ${formData.lastName}
Session: ${formData.session}
Strong Skills: ${formData.strongSkills.join(", ")}
Skill to Improve: ${formData.improveSkill}
Missing Must-Sees: ${formData.improveMissing.join(", ")}

You are generating a swim progress report.

STRICT RULES:
- Output exactly ONE paragraph with exactly FOUR sentences.
- Use complete, grammatically correct sentences.
- Use SIMPLE PAST tense for observed performance.
- Use PRESENT IMPERATIVE tense for encouragement.
- Do NOT use future tense or present perfect tense.
- Do NOT reword or replace verbs in the provided structure.
- Do NOT add extra commentary or advice.
- Follow the sentence structure exactly as written.
- Format lists naturally using commas and "and" when needed.
- Use a professional, encouraging tone.
- Do NOT repeat the swimmer’s name more than once.

REQUIRED STRUCTURE (copy exactly, only replace bracketed values):

Great job this session, {FirstName}. Excellent work on your {StrongSkills}. For the next level, continue to focus on {MissingMustSees} when doing {ImproveSkill}.  
It was a pleasure teaching you. Keep up the great effort, and best of luck next session!
    `.trim();

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    return res.status(200).json({ 
      report: response.choices[0].message.content 
    });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return res.status(500).json({ 
      error: 'Error generating report. Please try again.',
      details: error.message
    });
  }
}