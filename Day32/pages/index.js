
import Document, { Head, Main, NextScript } from "next/document";

export default function Home() {
  return (
    <html>
      <Head>
      <link type="text/css" rel="stylesheet" href="./assets/css/bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="./assets/fonts/font-awesome/css/all.min.css" />
<link type="text/css" rel="stylesheet" href="./assets/css/slick.css" />
<link rel="stylesheet" href="./assets/css/magnific-popup.css" />
<link type="text/css" rel="stylesheet" href="./assets/css/animate.css" />
{/* Favicon icon */}
<link rel="icon" type="image/png" sizes="32x32" href="./assets/images/template-two/fev.png" />
{/* Custom Stylesheet */}
<link type="text/css" rel="stylesheet" href="./assets/css/style.css" />
      </Head>
      

 
  <div>
 
  <div className="loader">
    <div className="loader_div" />
  </div>
  {/* Header */}
  
  <header classname="main_header">
    <div classname="container-fluid">
      <div classname="row align-items-center">
        <div classname="col-lg-2 col-sm-3 col-xs-6 col-5">
          <div classname="logo">
            <a href="#">
              <img classname="img-responsive" src="assets/images/logo.png" alt="logo" />
            </a>
          </div>
        </div>
        <div classname="col-lg-10 col-sm-9 col-xs-6 col-7">
          <div classname="main_nav ml-auto">
            {'{'}/* Main Nav Menu */{'}'}
            <nav id="primary_navigation" classname="site_navigation">
              <div classname="main_menu">
                <a href="javascript:void(0);" classname="close_menu"><i classname="fa fa-times" /></a><i classname="fa fa-times">
                  <ul classname="nav main_menu_list justify-content-end">
                    <li classname="menu-item page-active">
                      <a href="#home">Home</a>
                    </li>
                    <li classname="menu-item">
                      <a href="#about">About</a>
                    </li>
                    <li classname="menu-item">
                      <a href="#portfolio">Portfolio</a>
                    </li>
                    <li classname="menu-item">
                      <a href="#service">services</a>
                    </li>
                    <li classname="menu-item">
                      <a href="#team">team</a>
                    </li>
                    <li classname="menu-item">
                      <a href="#blog">Blog</a>
                    </li>
                    <li classname="menu-item"><a href="#contact">Contact</a></li>
                  </ul>
                </i></div><i classname="fa fa-times">
                <a href="#joiningPopup" classname="get_quote btn br-50 open-popup-link">Get a quote</a>
                <a classname="menu-bar mobile-navigation" href="javascript:void(0)">
                  <span classname="menu-btn-icon">
                    <span>
                      <span>
                        <span>
                        </span>
                      </span></span></span></a>
              </i></nav><i classname="fa fa-times">
              {'{'}/* End Main Nav Menu */{'}'}
            </i></div><i classname="fa fa-times">
          </i></div><i classname="fa fa-times">
        </i></div><i classname="fa fa-times">
      </i></div><i classname="fa fa-times">
    </i></header><i classname="fa fa-times">
    er&gt;
    {/* /. Header */}
    {/* banner Section */}
    <section className="banner_sec" id="home">
      <div className="banner_slider">
        <div className="b_slide" style={{backgroundImage: 'url(assets/images/template-two/banner.jpg)'}}>
          <div className="container">
            <div className="banner_caption">
              <div className="row">
                <div className="col-sm-9">
                  <h3 data-animation="fadeInLeft" data-delay="0.5s">SMART AND PROFESSIONAL</h3>
                  <h1 data-animation="fadeInLeft" data-delay="0.9s">Bevy Digital Agency</h1>
                  <p data-animation="fadeInLeft" data-delay="1.3s">Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s</p>
                  <a href="#" className="btn br-50" data-animation="fadeInUp" data-delay="1.6s">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="b_slide" style={{backgroundImage: 'url(assets/images/template-two/banner2.jpg)'}}>
          <div className="container">
            <div className="banner_caption">
              <div className="row">
                <div className="col-sm-9">
                  <h3 data-animation="fadeInLeft" data-delay="0.5s">SMART AND PROFESSIONAL</h3>
                  <h1 data-animation="fadeInLeft" data-delay="0.9s">Bevy Digital Agency</h1>
                  <p data-animation="fadeInLeft" data-delay="1.3s">Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s</p>
                  <a href="#" className="btn br-50" data-animation="fadeInUp" data-delay="1.6s">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="b_slide" style={{backgroundImage: 'url(assets/images/template-two/banner3.jpg)'}}>
          <div className="container">
            <div className="banner_caption">
              <div className="row">
                <div className="col-sm-9">
                  <h3 data-animation="fadeInLeft" data-delay="0.5s">SMART AND PROFESSIONAL</h3>
                  <h1 data-animation="fadeInLeft" data-delay="0.9s">Bevy Digital Agency</h1>
                  <p data-animation="fadeInLeft" data-delay="1.3s">Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s</p>
                  <a href="#" className="btn br-50" data-animation="fadeInUp" data-delay="1.6s">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /. banner Section */}
    {/* About Section */}
    <section className="about_sec" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="sec_heading wow fadeInLeft"><span>About Us</span>Our values and goals</h2>
            <p className="wow fadeInLeft">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.</p>
          </div>
          <div className="col-md-6">
            <div className="about_right wow fadeInRight">
              <img src="assets/images/template-two/about-img.jpg" alt="about" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 wow slideInUp" data-wow-duration=".5s" data-wow-delay="0s">
            <div className="what-we-do-item text-center mt-30">
              <i className="fa fa-laptop-code" />
              <h5 className="title">IT Soluations</h5>
              <p>Sed ut perspiciatis unde omnis iste natus error volup</p>
              <a href="case-details.html"><i className="fa fa-arrow-right" /></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 wow slideInUp" data-wow-duration="1s" data-wow-delay="0s">
            <div className="what-we-do-item text-center mt-30">
              <i className="fa fa-fingerprint" />
              <h5 className="title">Security System</h5>
              <p>Sed ut perspiciatis unde omnis iste natus error volup</p>
              <a href="case-details.html"><i className="fa fa-arrow-right" /></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 wow slideInUp" data-wow-duration="1.5s" data-wow-delay="0s">
            <div className="what-we-do-item text-center mt-30">
              <i className="fa fa-chalkboard" />
              <h5 className="title">Web Development</h5>
              <p>Sed ut perspiciatis unde omnis iste natus error volup</p>
              <a href="case-details.html"><i className="fa fa-arrow-right" /></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 wow slideInUp" data-wow-duration="2s" data-wow-delay="0s">
            <div className="what-we-do-item text-center mt-30">
              <i className="fa fa-database" />
              <h5 className="title">Database Security</h5>
              <p>Sed ut perspiciatis unde omnis iste natus error volup</p>
              <a href="case-details.html"><i className="fa fa-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /. About Section */}
    {/* portfolio Section */}
    <section className="portfolio_sec" id="portfolio">
      <div className="prtfolioTop bg_blue">
        <div className="container">
          <div className="sec_header c_white">
            <h2 className="sec_heading wow fadeInLeft"><span>LATEST CASE STUDIES</span>Reads Our Recent Case Studies
            </h2>
            <p className="wow fadeInLeft">We Don't Speak, Our Work Speaks For What We Do &amp; What We Promise.</p>
          </div>
        </div>
      </div>
      <div className="portfolio_bottom text-center">
        <div className="container">
          <div className="porfloio_slider">
            <div className="p_slide text-center"><img src="assets/images/template-two/potfolio2.png" alt="portfolio" /></div>
            <div className="p_slide text-center"><img src="assets/images/template-two/potfolio.png" alt="portfolio" /></div>
          </div>
        </div>
      </div>
    </section>{/* /. portfolio Section */}
    {/* Service Section */}
    <section className="service_sec" id="service">
      <div className="container">
        <div className="sec_header text-center">
          <h2 className="sec_heading wow fadeInLeft"><span>OUR LATEST SERVICES</span>We Offer Better Soluation For
            Your IT Business</h2>
          <p className="wow fadeInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
            pulvinar vestibulum. Doneceleifend, sem sed dictum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elits</p>
        </div>
        <div className="servics_list">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4 wow slideInUp" data-wow-duration=".25s" data-wow-delay="0s">
              <div className="service_item">
                <div className="service_thumb"><i className="fas fa-search" /></div>
                <div className="service_content">
                  <h4>SEO</h4>
                  <p>Lorem ipsum dolor sit amet. Con eleifend sem sed dictum mattis sectetur elit. Nulla
                    convallis pul.</p>
                  <a href="#" className="btn br-50">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 wow slideInUp" data-wow-duration="0.5s" data-wow-delay="0s">
              <div className="service_item">
                <div className="service_thumb"><i className="fa fa-pen-fancy" /></div>
                <div className="service_content">
                  <h4>DESIGN</h4>
                  <p>Lorem ipsum dolor sit amet. Con eleifend sem sed dictum mattis sectetur elit. Nulla
                    convallis pul.</p>
                  <a href="#" className="btn br-50">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 wow slideInUp" data-wow-duration="0.75s" data-wow-delay="0s">
              <div className="service_item">
                <div className="service_thumb"><i className="fa fa-handshake" /></div>
                <div className="service_content">
                  <h4>CONSULTING</h4>
                  <p>Lorem ipsum dolor sit amet. Con eleifend sem sed dictum mattis sectetur elit. Nulla
                    convallis pul.</p>
                  <a href="#" className="btn br-50">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 wow slideInUp" data-wow-duration="1s" data-wow-delay="0s">
              <div className="service_item">
                <div className="service_thumb"><i className="fas fa-volume-up" /></div>
                <div className="service_content">
                  <h4>ADVERTISING</h4>
                  <p>Lorem ipsum dolor sit amet. Con eleifend sem sed dictum mattis sectetur elit. Nulla
                    convallis pul.</p>
                  <a href="#" className="btn br-50">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 wow slideInUp" data-wow-duration="1.25s" data-wow-delay="0s">
              <div className="service_item">
                <div className="service_thumb"><i className="fa fa-flag" /></div>
                <div className="service_content">
                  <h4>BRANDING</h4>
                  <p>Lorem ipsum dolor sit amet. Con eleifend sem sed dictum mattis sectetur elit. Nulla
                    convallis pul.</p>
                  <a href="#" className="btn br-50">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 wow slideInUp" data-wow-duration="1.50s" data-wow-delay="0s">
              <div className="service_item">
                <div className="service_thumb"><i className="fa fa-laptop-code" /></div>
                <div className="service_content">
                  <h4>DEVELOPMENT</h4>
                  <p>Lorem ipsum dolor sit amet. Con eleifend sem sed dictum mattis sectetur elit. Nulla
                    convallis pul.</p>
                  <a href="#" className="btn br-50">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="btn br-50 browse_btn wow slideInUp" data-wow-duration="1.75s" data-wow-delay="0s">browse More</a>
        </div>
      </div>
    </section>{/* /. Service Section */}
    {/* Teams Section */}
    <section className="team_sec" id="team">
      <div className="container">
        <div className="sec_header text-center">
          <h2 className="sec_heading wow fadeInLeft"><span>OUR Team</span>MEET OUR LEADERS</h2>
          <p className="wow fadeInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
            pulvinar vestibulum. Doneceleifend, sem sed dictum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elits</p>
        </div>
        <div className="team_list">
          <div className="team_member">
            <div className="team_member_inner">
              <img src="assets/images/template-two/team-member.jpg" alt="team Member" />
              <div className="team_member_overlay">
                <h5>David Jhon</h5>
                <div className="memeber_role">IT CONSULTANT</div>
              </div>
            </div>
          </div>
          <div className="team_member">
            <div className="team_member_inner">
              <img src="assets/images/template-two/team-member2.jpg" alt="team Member" />
              <div className="team_member_overlay">
                <h5>David Jhon</h5>
                <div className="memeber_role">IT CONSULTANT</div>
              </div>
            </div>
          </div>
          <div className="team_member">
            <div className="team_member_inner">
              <img src="assets/images/template-two/team-member3.jpg" alt="team Member" />
              <div className="team_member_overlay">
                <h5>David Jhon</h5>
                <div className="memeber_role">IT CONSULTANT</div>
              </div>
            </div>
          </div>
          <div className="team_member">
            <div className="team_member_inner">
              <img src="assets/images/template-two/team-member4.jpg" alt="team Member" />
              <div className="team_member_overlay">
                <h5>David Jhon</h5>
                <div className="memeber_role">IT CONSULTANT</div>
              </div>
            </div>
          </div>
          <div className="team_member">
            <div className="team_member_inner">
              <img src="assets/images/template-two/team-member5.jpg" alt="team Member" />
              <div className="team_member_overlay">
                <h5>David Jhon</h5>
                <div className="memeber_role">IT CONSULTANT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* /. Teams Section */}
    {/* Counter Section */}
    <div className="counter_sec love_counter">
      <div className="container">
        <div className="counter_area mt-30 text-center">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="counter wow slideInUp" data-wow-duration=".5s" data-wow-delay="0s">
                <sub><span className="love_count">569</span> <sup>+</sup></sub>
                <span>Projct Complate</span>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptsantium doloremque
                  laudantium</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="counter wow slideInUp mt-55" data-wow-duration="1s" data-wow-delay="0s">
                <sub><span className="love_count">783</span> <sup>+</sup></sub>
                <span>Business Partners</span>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptsantium doloremque
                  laudantium</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="counter wow slideInUp" data-wow-duration="1.5s" data-wow-delay="0s">
                <sub><span className="love_count">356</span> <sup>+</sup></sub>
                <span>Happy Clients</span>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptsantium doloremque
                  laudantium</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="counter wow slideInUp mt-55" data-wow-duration="2s" data-wow-delay="0s">
                <sub><span className="love_count">894</span> <sup>+</sup></sub>
                <span>IT Consultant</span>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptsantium doloremque
                  laudantium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{/* Counter Section */}
    {/* Testimonials Section */}
    <section className="testimonials_sec" id="testimonials">
      <div className="container">
        <div className="testimonials_inner">
          <div className="sec_header">
            <h2 className="sec_heading wow fadeInLeft"><span>Testimonials</span>Our Clients Feedback</h2>
            <p className="wow fadeInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
              pulvinar vestibulum. Doneceleifend, sem sed dictum. Lorem ipsum dolor sit amet, consectetur
              adipiscing elits</p>
          </div>
          <div className="testi_wrap">
            <div className="testi_slider dots_bottom">
              <div className="testi_item">
                <div className="testi_content">
                  <ul className="star_rating">
                    <li><i className="fa fa-star fill" /></li>
                    <li><i className="fa fa-star fill" /></li>
                    <li><i className="fa fa-star fill" /></li>
                    <li><i className="fa fa-star fill" /></li>
                    <li><i className="fa fa-star fill" /></li>
                  </ul>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum has been the industry's.</p>
                </div>
                <div className="testi_author">
                  <div className="testi_name">John Tim</div>
                  <div className="testi_designation">Web Designer</div>
                </div>
              </div>
              <div className="testi_item">
                <div className="testi_content">
                  <ul className="star_rating">
                    <li><i className="fa fa-star fill" /></li>
                    <li><i className="fa fa-star fill" /></li>
                    <li><i className="fa fa-star fill" /></li>
                    <li><i className="fa fa-star fill" /></li>
                    <li><i className="fa fa-star fill" /></li>
                  </ul>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum has been the industry's.</p>
                </div>
                <div className="testi_author">
                  <div className="testi_name">John Tim</div>
                  <div className="testi_designation">Web Designer</div>
                </div>
              </div>
              <div className="testi_item">
                <div className="testi_content">
                  <ul className="star_rating">
                    <li><i className="fa fa-star fill" /></li>
                    <li><i className="fa fa-star fill" /></li>
                    <li><i className="fa fa-star fill" /></li>
                    <li><i className="fa fa-star fill" /></li>
                    <li><i className="fa fa-star fill" /></li>
                  </ul>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum has been the industry's.</p>
                </div>
                <div className="testi_author">
                  <div className="testi_name">John Tim</div>
                  <div className="testi_designation">Web Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  {/* /. Testimonials Section */}
    {/* /. News section */}
    <section className="news_sec" id="blog">
      <div className="container">
        <div className="sec_header">
          <h2 className="sec_heading wow fadeInLeft"><span>OUR Latest Blogs</span>Read Our Latest News &amp; Blog</h2>
          <p className="wow fadeInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
            pulvinar vestibulum. Doneceleifend, sem sed dictum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elits</p>
        </div>
        <div className="blogs_list">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4 wow slideInUp" data-wow-duration="0.25s" data-wow-delay="0s">
              <div className="blog_item">
                <div className="blog_thumb">
                  <a href="single-blog.html"><img src="assets/images/template-two/blog-img2.jpg" alt="team Member" /></a>
                </div>
                <div className="blog_item_content">
                  <a href="single-blog.html">
                    <h4>Lorem ipsum dolor sit amet</h4>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
                    pulvinar vestibulum. Doneceleifend, sem sed dictum. Lorem ipsum dolor sit amet,
                    consectetur
                    adipiscing elits</p>
                  <a href="single-blog.html" className="btn br-50">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 wow slideInUp" data-wow-duration="0.50s" data-wow-delay="0s">
              <div className="blog_item">
                <div className="blog_thumb">
                  <a href="single-blog.html"><img src="assets/images/template-two/blog-img3.jpg" alt="team Member" /></a>
                </div>
                <div className="blog_item_content">
                  <a href="single-blog.html">
                    <h4>Lorem ipsum dolor sit amet</h4>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
                    pulvinar vestibulum. Doneceleifend, sem sed dictum. Lorem ipsum dolor sit amet,
                    consectetur
                    adipiscing elits</p>
                  <a href="single-blog.html" className="btn br-50">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 wow slideInUp" data-wow-duration="0.75s" data-wow-delay="0s">
              <div className="blog_item">
                <div className="blog_thumb">
                  <a href="single-blog.html"><img src="assets/images/template-two/blog-img4.jpg" alt="team Member" /></a>
                </div>
                <div className="blog_item_content">
                  <a href="single-blog.html">
                    <h4>Lorem ipsum dolor sit amet</h4>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
                    pulvinar vestibulum. Doneceleifend, sem sed dictum. Lorem ipsum dolor sit amet,
                    consectetur
                    adipiscing elits</p>
                  <a href="single-blog.html" className="btn br-50">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 wow slideInUp" data-wow-duration="1.00s" data-wow-delay="0s">
              <div className="blog_item">
                <div className="blog_thumb">
                  <a href="single-blog.html"><img src="assets/images/template-two/blog-img5.jpg" alt="team Member" /></a>
                </div>
                <div className="blog_item_content">
                  <a href="single-blog.html">
                    <h4>Lorem ipsum dolor sit amet</h4>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
                    pulvinar vestibulum. Doneceleifend, sem sed dictum. Lorem ipsum dolor sit amet,
                    consectetur
                    adipiscing elits</p>
                  <a href="single-blog.html" className="btn br-50">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 wow slideInUp" data-wow-duration="1.25s" data-wow-delay="0s">
              <div className="blog_item">
                <div className="blog_thumb">
                  <a href="single-blog.html"><img src="assets/images/template-two/blog-img6.jpg" alt="team Member" /></a>
                </div>
                <div className="blog_item_content">
                  <a href="single-blog.html">
                    <h4>Lorem ipsum dolor sit amet</h4>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
                    pulvinar vestibulum. Doneceleifend, sem sed dictum. Lorem ipsum dolor sit amet,
                    consectetur
                    adipiscing elits</p>
                  <a href="single-blog.html" className="btn br-50">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 wow slideInUp" data-wow-duration="1.50s" data-wow-delay="0s">
              <div className="blog_item">
                <div className="blog_thumb">
                  <a href="single-blog.html"><img src="assets/images/template-two/blog-img7.jpg" alt="team Member" /></a>
                </div>
                <div className="blog_item_content">
                  <a href="single-blog.html">
                    <h4>Lorem ipsum dolor sit amet</h4>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
                    pulvinar vestibulum. Doneceleifend, sem sed dictum. Lorem ipsum dolor sit amet,
                    consectetur
                    adipiscing elits</p>
                  <a href="single-blog.html" className="btn br-50">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <a href="blog-list.html" className="btn br-50 browse_btn wow slideInUp" data-wow-duration="1.75s" data-wow-delay="0s" style={{visibility: 'visible', animationDuration: '1.75s', animationDelay: '0s', animationName: 'slideInUp'}}>browse
            More</a>
        </div>
      </div>
    </section>{/* /. News section */}
    {/* Pricing Section */}
    <section className="pricing_sec">
      <div className="pricing_list">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="pricing_item">
                <div className="pricing_value">
                  <div className="p_v_per_month"><span>$</span>25<em>/mo</em></div>
                  <div className="perYear">$250/year</div>
                </div>
                <div className="p_i_middle">
                  <h3>Basic</h3>
                  <ul className="pricing_info_list">
                    <li><i className="fa fa-check" />Lorem ipsum dolor sit amet</li>
                    <li><i className="fa fa-times" />Lorem ipsum dolor sit amet</li>
                    <li><i className="fa fa-times" />Lorem ipsum dolor sit amet</li>
                    <li><i className="fa fa-times" />Lorem ipsum dolor sit amet</li>
                    <li><i className="fa fa-times" />Lorem ipsum dolor sit amet</li>
                  </ul>
                  <a href="#" className="btn br-50">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing_item">
                <div className="pricing_value">
                  <div className="p_v_per_month"><span>$</span>35<em>/mo</em></div>
                  <div className="perYear">$400/year</div>
                </div>
                <div className="p_i_middle">
                  <h3>Premium</h3>
                  <ul className="pricing_info_list">
                    <li><i className="fa fa-check" />Lorem ipsum dolor sit amet</li>
                    <li><i className="fa fa-check" />Lorem ipsum dolor sit amet</li>
                    <li><i className="fa fa-check" />Lorem ipsum dolor sit amet</li>
                    <li><i className="fa fa-times" />Lorem ipsum dolor sit amet</li>
                    <li><i className="fa fa-times" />Lorem ipsum dolor sit amet</li>
                  </ul>
                  <a href="#" className="btn br-50">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing_item">
                <div className="pricing_value">
                  <div className="p_v_per_month"><span>$</span>45<em>/mo</em></div>
                  <div className="perYear">$510/year</div>
                </div>
                <div className="p_i_middle">
                  <h3>Ultimate</h3>
                  <ul className="pricing_info_list">
                    <li><i className="fa fa-check" />Lorem ipsum dolor sit amet</li>
                    <li><i className="fa fa-check" />Lorem ipsum dolor sit amet</li>
                    <li><i className="fa fa-check" />Lorem ipsum dolor sit amet</li>
                    <li><i className="fa fa-check" />Lorem ipsum dolor sit amet</li>
                    <li><i className="fa fa-check" />Lorem ipsum dolor sit amet</li>
                  </ul>
                  <a href="#" className="btn br-50">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* /. Pricing Section */}
    {/* Contact Section */}
    <section className="contact_sec" id="contact">
      <div className="sec_header text-center">
        <div className="container">
          <h2 className="sec_heading wow fadeInUp"><span>Contact us</span>Let's create Progress together</h2>
          <p className="wow fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
            pulvinar vestibulum. Doneceleifend, sem sed dictum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elits</p>
        </div>
      </div>
      <div className="container">
        <div className="contact-details d-flex">
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <div className="contact_info wow fadeInLeft">
                <h3>contact us</h3>
                <p>Feel free to contact us. A business has to be involving, it has to be fun, and it has to
                  exercise your creative instincts. Start where you are. Use what you have. Do what you
                  can. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <hr />
                <h5><i className="fa fa-map-marker" /> 1234 Some Avenue, New York, NY 56789
                </h5>
                <h5><i className="fa fa-envelope" /> info@youwebsite.com
                </h5>
                <h5><i className="fa fa-phone" /> (123) 456-7890
                </h5>
              </div>
            </div>
            <div className="col-sm-12 col-md-7">
              <div className="contact-form-area wow fadeInRight">
                <form action="#">
                  <div className="input-title">
                    <h3 className="title">Don't Hesitate To Contact With Us, Say Hello......</h3>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input-box">
                        <input className="form-control" type="text" placeholder="Full Name Here" />
                        <i className="fa fa-user" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-box">
                        <input className="form-control" type="email" placeholder="Email Here" />
                        <i className="fa fa-envelope-open" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-box">
                        <input className="form-control" type="text" placeholder="Phone No" />
                        <i className="fa fa-phone" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-box">
                        <input className="form-control" type="text" placeholder="Subject" />
                        <i className="fa fa-edit" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-box">
                        <textarea className="form-control" name="#" id="#" cols={30} rows={10} placeholder="Message Us" defaultValue={""} />
                        <i className="fa fa-pencil" />
                        <button className="btn br-50 wow slideInUp" data-wow-duration="1.5s" data-wow-delay="0s" type="submit">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  {/* /. Contact Section */}
    {/* Partners Section */}
    <div className="partners_sec">
      <div className="container">
        <div className="partners_slider">
          <div className="partner_item">
            <img src="assets/images/partner-1.png" alt="partner" />
          </div>
          <div className="partner_item">
            <img src="assets/images/partner-2.png" alt="partner" />
          </div>
          <div className="partner_item">
            <img src="assets/images/partner-3.png" alt="partner" />
          </div>
          <div className="partner_item">
            <img src="assets/images/partner-4.png" alt="partner" />
          </div>
          <div className="partner_item">
            <img src="assets/images/partner-5.png" alt="partner" />
          </div>
          <div className="partner_item">
            <img src="assets/images/partner-6.png" alt="partner" />
          </div>
          <div className="partner_item">
            <img src="assets/images/partner-7.png" alt="partner" />
          </div>
        </div>
      </div>
    </div>
    {/* Footer Section */}
    <footer className="main_footer wow fadeInUp">
      <div className="container">
        <div className="footer_top  text-center">
          <div className="footer_top_logo">
            <a href="#" className="footer-logo"><img src="assets/images/logo-icon.png" alt="logo-icon" /></a>
          </div>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam</p>
        </div>
        <div className="row text-center">
          <div className="col-sm-4">
            <div className="footer_sec">
              <i className="fa fa-phone-alt" />
              <h3>Call Us On</h3>
              <a href="#!">(123) 456-7890</a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="footer_sec">
              <i className="fa fa-envelope" />
              <h3>Mail us on</h3>
              <a href="mailto:info@youwebsite.com">info@youwebsite.com</a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="footer_sec">
              <i className="fab fa-skype" />
              <h3>Lets Skype</h3>
              <a href="#">skype.tester</a>
            </div>
          </div>
        </div>
        <div className="copyrigt_text d-flex justify-content-between">
          <span>© Copyright 2019 Bevy templates, Inc.</span>
          {/* social icons */}
          <div className="social_div">
            <ul className="social_list">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-instagram" /></a></li>
              <li><a href="#"><i className="fab fa-youtube" /></a></li>
              <li><a href="#"><i className="fab fa-pinterest-p" /></a></li>
            </ul>
          </div>{/* /. social icons */}
        </div>
      </div>
    </footer>{/* /. Footer Section */}
    <a href="javascript:void(0);" className="scrollUp"><i className="fas fa-chevron-up" /></a>
    {/* The Modal */}
    <div id="joiningPopup" className="white-popup mfp-hide custom_mfp_popup">
      <div className="modal-content gradientOne">      
        {/* Modal Header */}
        <div className="modal-header text-center">
          <h3 className="modal-title">Request for a Quote</h3>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam</p>
          <button title="Close (Esc)" type="button" className="mfp-close">×</button>
        </div>        
        {/* Modal body */}
        <div className="modal-body">
          <div className="get_quote_form">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" name="name" placeholder="Enter Your Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" name="name" placeholder="Enter Phone No." />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="email" className="form-control" name="name" placeholder="Enter Email Address" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Enter Your Message" defaultValue={""} />
              </div>
              <div className="text-center">
                <button type="submit" className="btn">Submit Your Request</button>
              </div>
            </form>
          </div>
        </div>        
      </div>
    </div>
  </i></div>
  
  )
  <body>
        <Main />
        <NextScript />
      </body>
    </html>
  )
}
