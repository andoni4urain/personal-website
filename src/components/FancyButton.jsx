
//Component made for buttons with logos on them. Ideal for 3840x2160
export default function FancyButton({image, altText, variant}){

    return (
        <div className="button-wrapper">
            <button className={`fancy-button ${variant}`}>
                <img src={image} alt={altText} className={`logo-img ${variant}`}></img>
            </button>
        </div>
    )
}