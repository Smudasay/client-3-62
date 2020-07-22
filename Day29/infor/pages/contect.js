import Header from '../components/Header'
import db from '../service/firebase'
import { useState } from 'react'
const Contect = () => {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
// console.log(name);
// console.log(username);
// console.log(email);
  const upload = () => {
    db.collection("users")
      .add({
        ชื่อ:name,
        เบอร์ : username,
        รายละเอียด: email
      }).then(() => {
        alert('บันทึกข้อมูลเรียบร้อย')
      })

  }

  return (
    <div className="page_contect">
      <Header title="contect" />

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
              <label htmlFor="name">ชื่อ-นามสกุล</label>
              <input type="text" name="name" placeholder="ชื่อ-นามสกุล" onChange={(e) => { setName(e.target.value) }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">เบอร์โทร</label>
              <input type="text" name="username" placeholder="เบอร์โทร" onChange={(e) => { setUsername(e.target.value) }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">รายละเอียด</label>
              <input type="text" name="email" placeholder="รายละเอียด" onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={upload}>
            Register
          </button>
        </div>
      </div>

    </div>

  )
}

export default Contect