import "./Header.css"
import logo from "../../assets/lloydsbank-icon.svg";


function Logo(){
    return(
        <div className="logo">
            <img className="logo-logo" src={logo} alt="logo"></img>
            <h1 className="logo-name">LLOYDS</h1>
        </div>
    )
}

function Login(){
    return (
        <button className="button-login">Login</button>
    )
}

function Navigation(){
    return(
        <nav>
            <ul className="navigation">
                <li className="navigation-home"><a href="https://www.lloydsbank.com/">Home</a></li>
                <li className="navigation-calculator"><a href=".">Mortgage Calculator</a></li>
                <li className="navigation-how"><a href=".">How it Works</a></li>
                <li className="navigation-apply"><a href=".">Apply for a Mortgage</a></li>
            </ul>
        </nav>
    )
}

function Header(){
    return(
        <header>
            <div className="upperHeader">
                <Logo></Logo>
                <Login></Login>
            </div>
            <Navigation></Navigation>
        </header>
    )
}

export default Header;