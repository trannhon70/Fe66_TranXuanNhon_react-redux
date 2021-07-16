import React, { Component } from 'react'
import { connect } from 'react-redux';

 class ThongTinTroChoi extends Component {
    render() {
        return (
            <div>
                <div className="display-4">bạn chọn : <span className="text-danger">{this.props.taiXiu ? 'Tài': 'Xỉu'} </span></div>
                <div className="display-4">Bàn thắng : <span className="text-dark">{this.props.soBanThang}</span></div>
                <div className="display-4">tổng số bàn chơi  : <span className="text-primary">{this.props.tongSoBanChoi} </span></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        soBanThang: state.BaiTapGameXuatSAcReducer.soBanThang,
        taiXiu: state.BaiTapGameXuatSAcReducer.taiXiu,
        tongSoBanChoi: state.BaiTapGameXuatSAcReducer.tongSoBanChoi,
    }
}


export default connect(mapStateToProps)(ThongTinTroChoi)