import Header from '../components/Header'
const About = () => (
  <div className="page_about">
    <Header title="about" />
    <div className="home1">
      <div className="img_home1">
      </div>
      <h1 className="title">ABOUT US</h1>
    </div>

    <div className="home3">

      <div className="home31">
        <h1>2536</h1>
        <p>เพื่อความปลอดภัยในพื้นที่ ไม่ว่าจะเป็นพื้นที่สำหรับที่อยู่อาศัย </p>
        <p>เช่น บ้านเดียว ทาวน์เฮาส์ ทาวน์โฮม คอนโด ห้องชุด</p>
        <p>หรือพื้นที่สำหรับการทำงาน เช่น อาคารพาณิชย์ ออฟฟิศ</p>
        <p> บริษัท โรงงาน โรงแรม หอพัก อพาร์ทเม้นท์</p>

      </div>
      <div className="home32">
        <img src="/images/workcctv8.jpg" />
      </div>
    </div>
  </div>
)

export default About