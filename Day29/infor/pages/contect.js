import Header from '../components/Header'
const Contect = () => (
  <div  className="page_contect">
    <Header title="contect"/>
    
    <h1 className="title">สนใจสินค้า หรือ สอบถามเพิ่มเติม</h1>
    <p>
    ส่งข้อความถึงเราได้ เราจะติดต่อกลับไปภายใน 24 ชม.
    สามารถกรอกแบบฟอร์มเพื่อส่งข้อมูลให้ทางบริษัทติดต่อกลับ 
    หรือลูกค้าสามารถติดต่อสอบถามผ่านทางช่องทางต่างๆได้ ทั้งทาง Facbook, Line, หรือโทรศัพท์
    </p>

    <div className="base-container" >
        <div className="header">Register</div>
        <div className="content">
          <div className="form">
          <div className="form-group">
              <label htmlFor="name">name</label>
              <input type="text" name="name" placeholder="name"
           />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>

 </div>
  
)

export default Contect