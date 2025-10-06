// HelpChatbot.jsx
import { useEffect, useRef, useState } from "react";
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

  const send = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    // Fake AI reply
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text:
            "Sample reply: I can help with projects, styling, or navigation. What would you like to do?",
        },
      ]);
    }, 500);
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
