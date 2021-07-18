import React, { Component } from 'react'
import {connect} from 'react-redux';
import { huyGheAction } from '../redux/action/BaiTapDatVeReducer';


 class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className="mt-5">
                    <button className="gheDuocChon"></button><span className="text-white ml-3" style={{ fontSize: '20' }}>ghế đã đặt </span><br />
                    <button className="gheDangChon"></button><span className="text-white ml-3" style={{ fontSize: '20' }}>ghế đang đặt  </span><br />
                    <button className="ghe" style={{ marginLeft: '0' }}></button><span className="text-white ml-3" style={{ fontSize: '20' }}>ghế chưa đặt  </span>
                </div>
                <div className="mt-5 ">
                    <table className="table" border='3'  >
                        <thead>
                            <tr className="text-white" style={{fontSize:20}}>
                                <th>số ghế</th>
                                <th>giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.danhSachGheDangDat.map((gheDangDat,index)=>{
                                return <tr className="text-warning" key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()}</td>
                                    <td><button className="btn btn-danger"onClick={()=>{
                                        this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                                    }}>hủy</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className="text-warning">
                                <td></td>
                                <td>Tổng tiền </td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                                    return tongTien += gheDangDat.gia;
                                },0).toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(ThongTinDatGhe);