import './dist/css/bootstrap.min.css';
import './App.css';
// import './style.css';
import TrangChu from './pages/trangchu';
import { Route, Routes } from "react-router-dom";
import LoaiSanPham from './components/loai_sp';
import MuaHang from './pages/muahang';
import VeChungToi from './pages/vechungtoi';
import LienHe from './pages/lienhe';
import SanPham from './pages/sanpham';
import ThanhToan from './components/thanhtoan';


function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<TrangChu />} />
                <Route path='/vechungtoi' element={<VeChungToi />} />
                <Route path='/muahang' element={<MuaHang/>} />
                <Route path='/lienhe' element={<LienHe />} />
                <Route path="/sanpham" element={<SanPham />} />
                <Route path="/thanhtoan" element={<ThanhToan />} />
            </Routes>
        </div>
    );
}

export default App;
