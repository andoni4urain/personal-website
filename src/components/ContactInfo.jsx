import { useState } from "react";

export default function ContactInfo( {onClose} ){
    
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("andoni4urain@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // reset after 2s
    };

    return(
        <div className="modal-backdrop">
            <div className="modal">
                {/* Header */}
                <h2>Contact Me</h2>
                <p>
                    Thanks for checking out my portfolio! I’m{" "}
                    <strong>Andoni Urain</strong>, a full-stack developer passionate about
                    building clean, scalable web and mobile applications.
                </p>
                {/* Email section */}
                <div className="contact-email">
                    <p>
                        📧{" "}
                        <a href="mailto:andoni4urain@gmail.com">
                        andoni4urain@gmail.com
                        </a>
                    </p>
                    <button className="btn btn--ghost" onClick={handleCopy}>
                        {copied ? "Copied!" : "Copy Email"}
                    </button>
                </div>

                <button className="modal-close" onClick={onClose}>Close</button>
            </div>
        </div>
    )
}