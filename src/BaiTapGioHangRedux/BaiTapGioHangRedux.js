import React, { Component } from 'react'
import RoduxList from './RoduxList';
import GioHangRedux from './GioHangRedux';
//import thư viện connect kết nối  react component redux store
import { connect} from 'react-redux';

 class BaiTapGioHangRedux extends Component {
     renderSoluong=()=>{
         return this.props.gioHang.reduce((tongSL,spGH,index)=>{
             return tongSL += spGH.soLuong;
         },0).toLocaleString();
     }
    render() {
        
        return (
            <div className="container">
                <h3 >Danh sách sản phẩm </h3>
                <div className="text-right">
                    <span style={{width:17, cursor:'pointer'}} data-toggle="modal" data-target="#modelId">
                        <i className="fa fa-cart mr-5"><i className="fa fa-card-arrow-down"></i>({this.renderSoluong()}  )giỏ hàng</i>
                    </span>
                </div>
                <RoduxList />
                <GioHangRedux />
            </div>
        )
    }
}
//viết hàm lấy giá trị stare từ redux store về biến thành props component
const mapStateToProps = (state)=>{
    return {
        gioHang: state.stateGioHang.gioHang
    }
}
export default connect(mapStateToProps)(BaiTapGioHangRedux);