// /src/ai.js (client)
function formatReply(raw = "") {
  let txt = raw.replace(/\*[^*]+\*/g, "").replace(/\s+/g, " ").trim();
  const HARD_LIMIT = 350;
  if (txt.length > HARD_LIMIT) txt = txt.slice(0, HARD_LIMIT).trim();
  const sentences = txt.split(/(?<=[.!?])\s+/).filter(Boolean);
  return sentences.slice(0, 3).join(" ");
}

export async function getResponseFromBot(prompt) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) throw new Error("API route failed");
  const data = await res.json();
  return formatReply(data.text || "");
}
