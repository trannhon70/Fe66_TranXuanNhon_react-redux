const stateGioHang = {
    gioHang: [
        // { maSP: 1, tenSP: 'sản phẩm mặt định', hinhAnh: '', soLuong: 1, gia: 1000 }
    ]
}
const BaiTapGioHangReducer = (state = stateGioHang, action) => {
    switch (action.type) {
        case 'Them_Gio_Hang': {
            let index = state.gioHang.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
            if (index !== -1) {
                state.gioHang[index].soLuong += 1;
            } else {
                state.gioHang.push(action.spGioHang);
            }
            state.gioHang = [...state.gioHang];
            return { ...state };
        };break;

        case 'xoa_gio_hang':{
            let gioHangCapNhat = [...state.gioHang];
            //tìm ra phần tử cần xóa dựa vào mã sản phẩm 
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP);
            if(index !== -1){
                gioHangCapNhat.splice(index, 1);
            }
            state.gioHang= gioHangCapNhat;
            return { ...state };
        };break;
        case 'tang_giam_so_luong':{
            let gioHangCapNhat=[...state.gioHang];
            //xử lý tăng giảm trên giỏ hàng cập nhật 
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP);
            if(index !== -1){
                if(action.tangGiam){
                    gioHangCapNhat[index].soLuong +=1;
                }
                else{
                    if(gioHangCapNhat[index].soLuong > 1){
                        gioHangCapNhat[index].soLuong -=1;
                    }
                    else{
                        alert('số lượng tối thiểu là 1')
                    }
                }
            }
            state.gioHang = gioHangCapNhat;
            return { ...state};
        }; break;
        default:
            return { ...state };
    }
    
}
export default BaiTapGioHangReducer;