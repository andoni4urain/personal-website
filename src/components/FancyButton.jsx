
//Component made for buttons with logos on them. Ideal for 3840x2160
export default function FancyButton({image, altText, variant, link}){

    const handleClick = () => {
    if (link) {
      window.open(link, "_blank"); // opens in a new tab
    }
  };

    return (
        <div className="button-wrapper">
            <button className={`fancy-button ${variant}`} onClick={handleClick}>
                <img src={image} alt={altText} className={`logo-img ${variant}`}></img>
            </button>
        </div>
    )
}