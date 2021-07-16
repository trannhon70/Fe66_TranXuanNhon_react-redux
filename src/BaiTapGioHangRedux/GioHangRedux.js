import React, { Component } from 'react'
//sử dụng thư viện connect lấy dữ liêu từ store về 
import { connect } from 'react-redux';

class GioHangRedux extends Component {
    render() {
        console.log(this.props.gioHang);
        return (
            <div>

                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>mã sp</th>
                                            <th>hình ảnh</th>
                                            <th>tên SP</th>
                                            <th>giá</th>
                                            <th>số lượng</th>
                                            <th>thành tiền </th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.gioHang.map((spGH, index) => {
                                            return <tr key={index}>
                                                <td>{spGH.maSP} </td>
                                                <td><img src={spGH.hinhAnh} width={50} height={50} /></td>
                                                <td>{spGH.tenSP}</td>
                                                <td>{spGH.giaBan}</td>
                                                <td>
                                                    <button className="btn btn-primary mr-3" onClick={() => {
                                                        this.props.tangGiamSoLuong(spGH.maSP,true)
                                                    }}>+</button>
                                                    {spGH.soLuong}
                                                    <button className="btn btn-primary ml-3" onClick={() => {
                                                         this.props.tangGiamSoLuong(spGH.maSP,false)
                                                    }}>-</button>
                                                </td>
                                                <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()} </td>
                                                <td><button class="btn btn-danger" onClick={() => {
                                                    this.props.xoaGioHang(spGH.maSP)
                                                }}>xóa</button></td>
                                            </tr>
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <th colspan="5"></th>
                                        <th>tổng tiền</th>
                                        <th>{this.props.gioHang.reduce((tongTien,spGioHang,index)=>{
                                            return tongTien += spGioHang.soLuong * spGioHang.giaBan;
                                        },0).toLocaleString()} </th>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
//hàm lấy state redux biến đổi thành props của component
const mapStateToProps = state => {//state là state tổng của ứng dụng chưa các state con
    return {
        gioHang: state.stateGioHang.gioHang
    }
}
//hàm đưa dữ liệu lên reducer
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {
            let action = {
                type: 'xoa_gio_hang',
                maSP
            };
            //dùng phương thức dispatch để đưa dữ liệu lê reducer
            dispatch(action);
        },

        tangGiamSoLuong: (maSP,tangGiam)=>{
            //tạo action để đưa dữ liệu lên reducer
            let action ={
                type: 'tang_giam_so_luong',
                maSP,
                tangGiam
            }
            //đưa action lên reducer mỗi lần người dùng thiết lập 
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);