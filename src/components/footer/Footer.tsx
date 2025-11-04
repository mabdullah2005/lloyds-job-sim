function Products(){
    return(
        <ul className="footer-products">
            <li className="footer-products-items"><a href="#"><h1>Products and Services</h1></a></li>
            <li className="footer-products-items"><a href="#">Current Accounts</a></li>
            <li className="footer-products-items"><a href="#">Credit Cards</a></li>
            <li className="footer-products-items"><a href="#">Loans</a></li>
        </ul>
    )
}

function Help(){
    return(
        <ul className="footer-help">
            <li className="footer-help-items"><a href="#"><h1>Help and Security</h1></a></li>
            <li className="footer-help-items"><a href="#">Banking Online</a></li>
            <li className="footer-help-items"><a href="#">Mobile Banking App</a></li>
            <li className="footer-help-items"><a href="#">Service Status</a></li>
            <li className="footer-help-items"><a href="#">Fraud and Security</a></li>
        </ul>
    )
}

function Legal(){
    return(
        <ul className="footer-legal">
            <li className="footer-legal-items"><a href="#"><h1>Legal</h1></a></li>
            <li className="footer-legal-items"><a href="#">Legal Information</a></li>
            <li className="footer-legal-items"><a href="#">Terms and Conditions</a></li>
            <li className="footer-legal-items"><a href="#">Cookies</a></li>
        </ul>
    )
}

function About(){
    return(
        <ul className="footer-about">
            <li className="footer-about-items"><a href="#"><h1>About us</h1></a></li>
            <li className="footer-about-items"><a href="#">About Lloyd's</a></li>
            <li className="footer-about-items"><a href="#">Careers</a></li>
        </ul>
    )

}


function Footer(){
    return(
        <>
            <Products></Products>
            <Help></Help>
            <Legal></Legal>
            <About></About>
        </>
    )
}

export default Footer;