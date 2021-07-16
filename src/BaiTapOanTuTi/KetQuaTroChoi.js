import React, { Component } from 'react'
import {connect} from 'react-redux';

 class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-success">{this.props.ketQua}</div>
                <div style={{fontSize:30}} className=" text-success">số bàn thắng :<span className="text-warning">{this.props.soBanThang}</span></div>
                <div style={{fontSize:30}} className=" text-success">số bàn chơi :<span className="text-warning">{this.props.soBanChoi}</span></div>
                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        ketQua: state.BaiTapOanTuTiReducer.ketQua,
        soBanThang : state.BaiTapOanTuTiReducer.soBanThang,
        soBanChoi : state.BaiTapOanTuTiReducer.soBanChoi,
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi);