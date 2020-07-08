import Link from 'next/link'
// import img_logo from '../images/logo.png'
const Header = (props) => {
    console.log(props);

    return (
        <div>
            <div className="header">
                {/* <img src={img_logo}/> */}
                <div className="logo"></div>
                <div className="right_logo">
                    <div>
                        <p>asdasd</p>
                    </div>
                    <div>
                        <p>asdasdfg</p>
                    </div>
                    <div>
                        <p>asdasdfg</p>
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
        </div>
    )
}

export default Header