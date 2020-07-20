import NextHead from 'next/head'



const Head = (props) => (
  <NextHead>
    <link type="text/css" rel="stylesheet" href="./assets/css/bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="./assets/fonts/font-awesome/css/all.min.css" />
<link type="text/css" rel="stylesheet" href="./assets/css/slick.css" />
<link rel="stylesheet" href="./assets/css/magnific-popup.css" />
<link type="text/css" rel="stylesheet" href="./assets/css/animate.css" />
{/* Favicon icon */}
<link rel="icon" type="image/png" sizes="32x32" href="./assets/images/template-two/fev.png" />
{/* Custom Stylesheet */}
<link type="text/css" rel="stylesheet" href="./assets/css/style.css" />
<script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/slick.min.js"></script>
    <script src="assets/js/wow.min.js"></script>
    <script src="assets/js/jquery.mixitup.min.js"></script>
    <script src="assets/js/jquery.magnific-popup.min.js"></script>
    <script src="assets/js/custom.js"></script>
  </NextHead>
  
)


export default Head