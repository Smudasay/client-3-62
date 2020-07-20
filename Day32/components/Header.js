import Link from 'next/link'
// import img_logo from '../images/logo.png'
const Header = (props) => {
    console.log(props);

    return (

        <div>
           <header className="main_header">
  <div className="container-fluid">
    <div className="row align-items-center">
      <div className="col-lg-2 col-sm-3 col-xs-6 col-5">
        <div className="logo">
          <a href="#">
            <img className="img-responsive" src="assets/images/logo.png" alt="logo" />
          </a>
        </div>
      </div>
      <div className="col-lg-10 col-sm-9 col-xs-6 col-7">
        <div className="main_nav ml-auto">
          {/* Main Nav Menu */}
          <nav id="primary_navigation" className="site_navigation">
            <div className="main_menu">
              <a href="javascript:void(0);" className="close_menu"><i className="fa fa-times" /></a>
              <ul className="nav main_menu_list justify-content-end">
                <li className="menu-item page-active">
                  <a href="#home">Home</a>
                </li>
                <li className="menu-item">
                  <a href="#about">About</a>
                </li>
                <li className="menu-item">
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li className="menu-item">
                  <a href="#service">services</a>
                </li>
                <li className="menu-item">
                  <a href="#team">team</a>
                </li>
                <li className="menu-item">
                  <a href="#blog">Blog</a>
                </li>
                <li className="menu-item"><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <a href="#joiningPopup" className="get_quote btn br-50 open-popup-link">Get a quote</a>
            <a className="menu-bar mobile-navigation" href="javascript:void(0)">
              <span className="menu-btn-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
          </nav>
          {/* End Main Nav Menu */}
        </div>
      </div>
    </div>
  </div>
</header>

        </div>
    )
}

export default Header