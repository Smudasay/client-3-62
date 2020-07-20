import Header from '../components/Header'
const About = () => (
  <div className="page_about">
    <Header title="about" />
    <div className="home1">
      <h1 className="title">ABOUT US</h1>
      <div className="title1">
        <img src="/images/cctv111.jpg"
          style={{
            width: "100%",
            height: "200px",
            opacity: 0.2,
          }}
        />
      </div>
    </div>
    <div className="home3">

      <div className="home31">
        <h1>2536</h1>
        <p>ก่อตั้งบริษัท คูลลิ่งเทค ซัพพลาย แอนด์ เซอร์วิส จำกัด </p>
        <p>หน่าย ออกแบบ และ ติดตั้ง ระบบเครื่องทำความเย็น</p>
        <p>ระบบไฟฟ้า เครื่องปรับอากาศ และ ห้องเย็น</p>

      </div>
      <div classNamea="home32">
        <img src="/images/workcctv8.jpg"
          style={{
            width: "30%",
            height: "300px",
            borderRadius: "20px"
          }}
        />
      </div>
    </div>
  </div>
)

export default About