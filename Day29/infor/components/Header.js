import Link from 'next/link'
// import img_logo from '../images/logo.png'
const Header = (props) => {
    console.log(props);

    return (

        <div>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
                         integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
            <div className="header">
                {/* <img src={img_logo}/> */}
                <div className="logo"></div>
                <div className="right_logo">
                    <div>
                        <a class="fb" href="https://www.facebook.com/profile.php?id=100004468123072" target="_blank">
                            <i class=" fab fa-facebook-square fa-2x"> </i>
                        </a>
                    </div>
                    <div>
                        <a className="ig" href="https://www.instagram.com/mr.say_/?hl=th" target="_blank">
                            <i className="fab fa-instagram fa-2x" ></i>
                        </a>
                    </div>
                    <div>
                        <a class="gh" href="https://github.com/Smudasay" target="_blank">
                            <i class=" fab fa-github-square fa-2x"> </i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="navbar">
                <Link href="/">
                    <div className={props.title === "home" ? "active menu" : "menu"}>Home</div>
                </Link>
                <Link href="/about">
                    <div className={props.title === "about" ? "active menu" : "menu"} >Product</div>
                </Link>
                <Link href="/contect">
                    <div className={props.title === "contect" ? "active menu" : "menu"}>About</div>
                </Link>
                {/* ยังไม่ได้เพิ่ม   */}
                <Link href="/contect">
                    <div className={props.title === "contect" ? "active menu" : "menu"}>Contact</div>
                </Link>
                <Link href="/contect">
                    <div className={props.title === "contect" ? "active menu" : "menu"}>Portfolio</div>
                </Link>
                <Link href="/contect">
                    <div className={props.title === "contect" ? "active menu" : "menu"}>Shop</div>
                </Link>
                {/* ยังไม่ได้เพิ่ม   */}
            </div>
            <select className="select-in">
                <option>TH</option>
                <option>EN</option>
            </select>
        </div>
    )
}

export default Header