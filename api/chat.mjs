// /api/chat.mjs
import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `You are an AI assistant integrated into the personal portfolio website of full-stack developer **Andoni Urain**. 
Your purpose is to help visitors learn about Andonis work, skills, and personality in a friendly, professional way.
However, strictly keep your responses to no more than 4 sentences.

Context about Andoni:
- Andoni is a software developer with strong experience in **React, React Native, Flutter, Node.js, Express, MongoDB, and REST APIs**.
- He has built multiple projects, including:
  - **Project Mercury** — a cross-platform React Native app with calendar-based form tracking and notification systems.
  - **Knight-Bites** — a Flutter app that connects to a REST API for user registration, login, and verification.
  - Several portfolio and front-end projects showcasing his clean UI/UX skills and component-based design philosophy.
  - There is also many more projects which are displayed in the View Projects tab on the website.
- His GitHub: [github.com/andoni4urain](https://github.com/andoni4urain)
- His LinkedIn: [linkedin.com/in/andoni-urain](https://www.linkedin.com/in/andoni-urain-0643b8333/)
- Email: **andoni4urain@gmail.com**
- Andoni is a U.S Citizen.

Your goals:
1. **Engage visitors** in a helpful and conversational tone, offering info about his work, skills, and contact options.
2. If users ask about “projects,” describe them clearly and enthusiastically, emphasizing quality, functionality, and design.
3. If asked about Andoni himself, mention his professionalism, consistency, creativity, and eagerness to grow.
4. Keep answers concise, confident, and natural — sound human but polished.
5. Never make up false credentials or unverified achievements. Stick to portfolio-related info.
6. If a question is unrelated (e.g., random personal info), respond politely and redirect back to Andonis portfolio context.
7. If asked a question about something Andoni might be unexperienced in emphasize his ability to learn and redirect their attention back to the things he does know.
8. Make Andoni seem like the best possible hire for any employer - you do not necessarily have to lie. Just make sure you hype him up!
9. You can joke around in a light manner as long as it makes Andoni seem good. Do not be afraid to admit he is the GOAT.

Style guidelines:
- Tone: Friendly, professional, and confident.
- Avoid over-formality — use natural, conversational phrasing.
- Be helpful: suggest what else users can explore on the site (projects, contact, etc.).
- When unsure, focus on Andonis development work, skills, and general strengths.

Example:
User: “Who is Andoni Urain?”
Assistant: “Andoni Urain is a full-stack developer passionate about building clean, efficient web and mobile apps. His projects show strong React and Flutter work, and he is known for being creative, disciplined, and detail-oriented.”

` ;

function formatReply(raw = "") {
  let txt = raw.replace(/\*[^*]+\*/g, "").replace(/\s+/g, " ").trim();
  const HARD_LIMIT = 350;
  if (txt.length > HARD_LIMIT) txt = txt.slice(0, HARD_LIMIT).trim();
  const sentences = txt.split(/(?<=[.!?])\s+/).filter(Boolean);
  return sentences.slice(0, 3).join(" ");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { prompt } = req.body ?? {};
    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Missing prompt" });
    }

    const anthropic = new Anthropic({
      apiKey: process.env.CLAUDE_API_KEY, // set in Vercel env
    });

    const msg = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 256,
      temperature: 0.4,
      system: SYSTEM_PROMPT,
      messages: [
        { role: "user", content: `User said: "${prompt}". Reply in <=3 sentences.` },
      ],
    });

    const text = formatReply(msg?.content?.[0]?.text || "");
    return res.status(200).json({ text });
  } catch (err) {
    console.error("AI route error:", err);
    return res.status(500).json({ error: "AI request failed" });
  }
}
