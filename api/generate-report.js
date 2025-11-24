import OpenAI from "openai";

export default async function handler(req, res) {
  // Enable CORS
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

Generate an encouraging and structured swim report card comment.
Start with: Great effort this session ${formData.firstName}.
Include praise for two skills the swimmer performed well on (skill 1 and skill 2). Shorten the skill names if needed.
Then provide one area to improve (skill_to_improve), followed by a brief, clear explanation of what must be seen or demonstrated.
Do not use the pronoun 'I'.
Keep the total response to 4 sentences.
End with: Best of luck next session!
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