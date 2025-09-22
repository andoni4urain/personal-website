

export default function ContactInfo( {onClose} ){
    

    return(
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Contact Information</h2>
                <p>Email: <a href="mailto:andoni@example.com">andoni4urain@gmail.com</a></p>
                <p>Phone Number: 321-208-4420</p>
                <button className="modal-close" onClick={onClose}>Close</button>
            </div>
        </div>
    )
}