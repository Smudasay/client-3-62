import Header from '../components/Header'
import { Carousel } from 'antd';
import Footer from "../components/Footer"
export default function Home() {
  return (
    <div className="page_home">
      <Header title="home" />

      <div className="carousel" >
        <Carousel
          style={{
            height: "452.5px",
            width: "800px"
          }}>

          <div>
            <img src="/images/cctv4.jpg"
              style={{
                width: "100%",
                height: "100%"
              }} />
          </div>
          <div>
            <img src="/images/cctv22.jpg"
              style={{
                width: "100%",
                height: "100%"
              }} />
          </div>
        </Carousel>
      </div>
      <div className="home1">

        <div className="home11">
          <div classNamea="home111">
            <h1>ผลิต ออกแบบ ติดตั้งแผ่นฉนวนสำเร็จรูป</h1>
            <p>ทางบริษัทยินดีอย่างยิ่งที่จะเข้าไปประเมินหน้างานให้แก่ลูกค้าหรือให้คำแนะนำ </p>
            <p> หากลูกค้าสนใจสร้างห้องเย็นห้องควบคุมอุณหภูมิกั้นไลน์ผลิตห้องควบคุมความชื้น</p>
            <p>เพราะเราคือ…โรงงานผลิตแผ่นฉนวนสำเร็จรูปกันความร้อน รับติดตั้ง </p>
            <p>พร้อมบริการหลังการขาย ครบวงจร ด้วยผลงานและประสบการณ์กว่า</p>
          </div>
          <div classNamea="home112">
            <img src="/images/workcctv13.jpg"
              style={{
                width: "30%",
                height: "400px",
                borderRadius: "20px"
              }}
            />
          </div>
        </div>


      </div>
      <Footer />
    </div>
  )
}
