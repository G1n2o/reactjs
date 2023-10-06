import LoaiSanPham from "./loai_sp";

function Content() {
    const dsLoaiSanPham = [
        {
            'ten': 'Quan ao nam',
            'ds_san_pham': [
                {
                    'hinh_anh': 'anh.jpg',
                    'ten': 'San Pham 1',
                    'gia': 1000
                },
                {
                    'hinh_anh': 'anh1.jpg',
                    'ten': 'San Pham 2',
                    'gia': 2000
                }
            ]
        },
        {
            'ten': 'Quan ao nu',
            'ds_san_pham': [
                {
                    'hinh_anh': 'anh3.jpg',
                    'ten': 'San Pham 12',
                    'gia': 3000
                },
                {
                    'hinh_anh': 'anh4.jpg',
                    'ten': 'San Pham 21',
                    'gia': 4000
                }
            ]
        },
    ];
    const listLoaiSanPham = dsLoaiSanPham.map(function (item) {
        return (
            <LoaiSanPham data={item} />
        );
    });
    return (

            <>
                {listLoaiSanPham}
            </>
    );
}
export default Content