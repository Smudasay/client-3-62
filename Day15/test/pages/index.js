import Head from 'next/head'
// import '../styles.css'
export default function Home() {
  return (
    <>
      <Head>
        <div>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="./styles.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous" />
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
            <img className src="./ig-logo.png" width="30px" height="30px" />
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

     
    </>


  )
}
