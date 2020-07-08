import Link from 'next/link'
// import img_logo from '../images/logo.png'
const Header = (props) => {
    console.log(props);

    return (
        <div>
            <div className="header">
                {/* <img src={img_logo}/> */}
                <div className="logo"></div>
            </div>
            <div className="navbar">
                <Link href="/">
                    <div className={props.title === "home" ? "active menu" : "menu"}>Index Page</div>
                </Link>
                <Link href="/about">
                    <div className={props.title === "about" ? "active menu" : "menu"} >About Page</div>
                </Link>
                <Link href="/contect">
                    <div className={props.title === "contect" ? "active menu" : "menu"}>Contect Page</div>
                </Link>
               

            </div>
        </div>
    )
}

export default Header