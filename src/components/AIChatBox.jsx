// HelpChatbot.jsx
import { useEffect, useRef, useState } from "react";
import { getResponseFromBot } from "../ai";
import "../styling/aichatbox.css"

export default function HelpChatbot() {
  const [expanded, setExpanded] = useState(false); // minimized bar by default
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hey! Want to know more about Andoni? Ask me anything work related and I will answer it to the best of my ability!" },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (expanded && listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, expanded]);

  const send = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    // Users messages gets auto added
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");

    try {
    // Call Claude AI for response
    const reply = await getResponseFromBot(text);

    // Add AI response to chat
      setMessages((m) => [...m, { role: "ai", text: reply }]);
    }   catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: "Sorry, I had trouble reaching my AI brain right now. Try again in a moment!",
        },
      ]);
    }
  };

  return (
    <>
      {/* Minimized bar */}
      {!expanded && (
        <button
          className="chat-minibar"
          onClick={() => setExpanded(true)}
          aria-label="Open help chat"
        >
          <span>Need help?</span>
          <span className="dot" aria-hidden />
        </button>
      )}

      {/* Expanded chat */}
      {expanded && (
        <section className="chat-widget" aria-label="Help chat">
          <header className="chat-header">
            <div className="title">
              <span className="spark"></span> Rumble Assistant
            </div>
            <div className="actions">
              <button
                className="icon-btn"
                onClick={() => setExpanded(false)}
                aria-label="Minimize chat"
                title="Minimize"
              >
                ▾
              </button>
            </div>
          </header>

          <div className="chat-body" ref={listRef}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`msg ${m.role === "user" ? "msg-user" : "msg-ai"}`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <form className="chat-input" onSubmit={send}>
            <input
              type="text"
              placeholder="Ask a question…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Type your message"
            />
            <button type="submit" className="send-btn">
              Send
            </button>
          </form>
        </section>
      )}
    </>
  );
}
