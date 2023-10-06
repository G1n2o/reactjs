function SanPham(props){
    return(
        <div className="san-pham col-sm-3">
            <img src={props.info.hinh_anh}/>
            <p>{props.info.ten}</p>
            <p>{props.info.gia}</p>
            <button>Chon mua</button>
        </div>
    )
}
export default SanPham