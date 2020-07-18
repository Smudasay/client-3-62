import Header from '../components/Header'
import { Carousel } from 'antd';
export default function Home() {
  return (
    <div className="page_home">
      <Header title="home" />
      <div className="carousel" >
        <Carousel autoplay
          style={{
            height: "500px",
            width: "800px"
          }}>
          <div>
            <img src="/images/cctv1.jpg"
              style={{
                width: "100%",
                height: "100%"
              }} />
          </div>
          <div>
            <img src="/images/cctv2.jpg"
              style={{
                width: "100%",
                height: "100%"
              }} />
          </div>
          <div>
            <img src="/images/cctv3.jpg"
              style={{
                width: "100%",
                height: "100%"
              }} />
          </div>
        </Carousel>
      </div>
      <div className="home1">
        <div className="home11">
          <div classNamea="home113">

          </div>
          <div classNamea="home113">

          </div>
        </div>
      </div>
    </div>
  )
}
