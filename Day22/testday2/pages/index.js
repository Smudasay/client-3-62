// import React from 'react'
// export default () => <div>Hello world!</div>
import Head from 'next/head'
export default () => {
  return (
    <div>

      <Head>
        <div>
          <title>Create Next</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" 
          integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous" />
        </div>

      </Head>
     <main className="reset">
        <h1 className="reset text">MUDASAY</h1>
        <h5 className="reset text-me">Contact me</h5>

        
        <div className="content">
          <a className="fb" href="https://www.facebook.com/profile.php?id=100004468123072" target="_blank">
            <i className=" fab fa-facebook-square fa-2x"> </i>
          </a>
          <a className="ig" href="https://www.instagram.com/mr.say_/?hl=th" target="_blank">
            <i className="fab fa-instagram fa-2x" ></i>
          </a>
          <a className="gh" href="https://github.com/Smudasay" target="_blank">
            <i className=" fab fa-github-square fa-2x"> </i>
          </a>
          <a className="gm" href="/Resume.html" target="_blank">
            <i className=" fas fa-envelope-square fa-2x"> </i>
          </a>
        </div>
        <select className="select-in">
          <option>TH</option>
          <option>EN</option>
        </select>
      </main>
      
      <style jsx>{`
       @import 'https://fonts.googleapis.com/css2?family=Sriracha&display=swap';
       @import 'https://fonts.googleapis.com/css?family=Kanit|Prompt';
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          background-image: url('./bg.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
       
        body {
            font-family: 'Sriracha', cursive;
        }
        
        h5 {
            font-family: 'Prompt', sans-serif;
        }
        
        .img_circle {
            width: 300px;
            height: 500px;
        }
        
   
        .reset text {
            text-align: center;
            font-size: 10rem;
            font-weight: 500;
            color: white;
        }
        
        .reset text-me {
            text-align: center;
            font-size: 2rem;
            font-weight: 100;
            color: white;
        }
        
        .content {
            padding-top: 20px;
            width: 50vw;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
        
        .fb {
            color: rgb(77, 76, 76);
        }
        
        .fb:hover {
            color: blue;
        }
        
        .ig {
            filter: grayscale(100%);
        }
        
        .ig:hover {
            filter: grayscale(0%);
        }
        
        .gh {
            color: rgb(77, 76, 76);
        }
        
        .gh:hover {
            color: rgb(23, 23, 39);
        }
        
        .gm {
            color: rgb(77, 76, 76);
        }
        
        .gm:hover {
            color: rgb(240, 15, 15);
        }
        
        .select-in {
            position: fixed;
            right: 5px;
            bottom: 5px;
        }
        
      `}</style>

      
    </div>
    
  )
}