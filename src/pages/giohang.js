import { Link } from "react-router-dom";
import ThanhToan from "../components/thanhtoan";

export default function GioHang() {
    return (
        <>
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>

                    <thead>
                        <tr>
                            <td>Quần công nhân</td>
                            <td>80000</td>
                            <td>1</td>
                            <td>80000</td>
                            <td>
                                <a href="">Sửa</a> | <a href="">Xóa</a>
                            </td>

                        </tr>
                    </thead>

                </table>
            </div>
            <div class="">
                <div class="btn1">
                    <Link to="/ThanhToan">
                    <button class="btn btn-sm btn-outline-secondary">Thanh toán</button>
                    </Link>
                </div>
            </div>

            <div class="">
                <div class="btn1">
                    <Link to="/sanpham">
                    <button class="btn btn-sm btn-outline-secondary">Tiếp tục mua hàng</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
