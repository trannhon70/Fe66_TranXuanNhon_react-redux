import React, { Component } from 'react'
import { connect } from 'react-redux';

class RoduxItem extends Component {
    render() {
        let { product } = this.props;
        return (
            <div className="card text-left">
                <img width={300} height={300} className="card-img-top" src={product.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{product.tenSP}</h4>
                    <p className="card-text">{product.giaBan.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={() => {
                        this.props.themGioHang(product)
                    }}>thêm giỏ hàng </button>
                </div>
            </div>
        )
    }
}
//hàm dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPham) => {
            //tạo ra sp giỏ hang
            let spGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                hinhAnh: sanPham.hinhAnh,
                soLuong: 1,
                giaBan: sanPham.giaBan
            }
            //console.log('spGioHang',spGioHang);
            //tạo ra action
            let action = {
                type: 'Them_Gio_Hang',//thuộc tính bắt buộc của action
                spGioHang
            };
            //dùng hàm dispacth từ redux => gửi dữ liệu lên reducer
            dispatch(action);
        }

    }
}

export default connect(null, mapDispatchToProps)(RoduxItem)