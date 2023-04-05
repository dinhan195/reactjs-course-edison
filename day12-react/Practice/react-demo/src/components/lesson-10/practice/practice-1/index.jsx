import photo1 from '../image/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg'
import { Base64Photo } from '../contants'
import logo from '../image/2021_Facebook_icon.svg.webp'

export default function Practice1() {
  return (
    <div>
      <div>Đây là hướng dẫn dùng ảnh trong ReactJs</div>
      <img src={photo1} width={200} alt='' height={100} />
      <div>Đây là dùng require</div>
      <img src={require('../image/joshua-hanson-e616t35Vbeg-unsplash.jpg')} alt="" width={200} height={100} />
      <div>Đây là dùng ảnh link online</div>
      <img src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" width={200} height={200} />
      <div>Đây là ảnh dùng base 64</div>
      <img src={Base64Photo} alt="" width={200} height={200} />
      <div>Dây là ảnh dùng svg</div>
      <img src={logo} alt="" width={50} height={50} />
    </div>
  )
}