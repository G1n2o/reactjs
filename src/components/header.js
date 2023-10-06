import {NavLink} from "react-router-dom";

 export default function Header(){
return(
    <>
    <div class="container">
     <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
        <span class="fs-4">KingsMan</span>
      </a>
     

      <ul class="nav nav-pills">
        <li class="nav-item">
            <NavLink to="/" className="nav-link">Trang Chủ</NavLink>
        </li>
       
        <li class="nav-item">
            <NavLink to="/sanpham" className="nav-link">Sản Phẩm</NavLink>
        </li>

        <li class="nav-item">
            <NavLink to="/lienhe" className="nav-link">Liên Hệ</NavLink>
        </li>

        <li class="nav-item">
            <NavLink to="/muahang" className="nav-link">Giỏ Hàng</NavLink>
        </li>
      </ul>
    </header>

  </div>
    </>
)
};