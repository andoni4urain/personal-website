import "../styling/header.css";
import MyLogo from "../assets/MyLogo.png"
import SearchGlass from "../assets/SearchGlass.png"

export default function Header(){

    return(
        <nav className="nav-bar">
            <img className="nav-image" src={MyLogo}></img>
            <span className="nav-text"></span>
            <form className="search-bar">
                <button type="submit" className="search-button">
                    <img src={SearchGlass} alt="Search"/>   
                </button> 
                <input type="text" placeholder="Search..." aria-label="Search Here" name="UserSearch"/>
            </form>
        </nav>
    )

}