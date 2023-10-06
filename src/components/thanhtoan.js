import { Link } from "react-router-dom";

function ThanhToan() {

    return (
        <div>
             <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"><h1>Thanh Toán Đơn Hàng</h1></header>
            <div className="row">
            <div className="col-md-7">
                <div className="card">
                    <div className="card-header">
                        <h4>Thông Tin</h4>
                    </div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> Họ</label>
                                    <input type="text" name="firstname" className="form-control" />
                                    <small className="text-danger"></small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> Tên</label>
                                    <input type="text" name="lastname"  className="form-control" />
                                    <small className="text-danger"></small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> Số điện thoại</label>
                                    <input type="number" name="phone"  className="form-control" />
                                    <small className="text-danger"></small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> Email</label>
                                    <input type="email" name="email" className="form-control" />
                                    <small className="text-danger"></small>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-3">
                                    <label> Địa chỉ</label>
                                    <textarea rows="3" name="address"  className="form-control"></textarea>
                                    <small className="text-danger"></small>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group text-end">
                                    <button type="button" className="btn btn-primary mx-1">Thanh Toán</button>
                                    <button type="button" className="btn btn-primary mx-1" >Trả bằng thẻ tín dụng</button>
                                    <button type="button" className="btn btn-warning mx-1">Thanh Toán Online</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th width="50%">Sản Phẩm</th>
                            <th>Đơn Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Tiền</th>

                        </tr>
          
                    </thead>
                    <th>Quần công nhân</th>
                            <th>20000</th>
                            <th>1</th>
                            <th>20000</th>
                </table>
            </div>  
            </div>
            <div class="">
                <div class="btn1">
                    <Link to="/muahang">
                    <button class="btn btn-sm btn-outline-secondary">Quay Lại</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ThanhToan;