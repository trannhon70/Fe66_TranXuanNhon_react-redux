import React, { Component } from 'react'
import './BaiTapGameXuatSac.css';
import XuatSac from './XuatSac';
import ThongTinTroChoi from './ThongTinTroChoi';
import { connect } from 'react-redux';

class BaiTapGameXuatSacRedux extends Component {
    render() {
        return (
            <div className="game">
                <div className="title-game text-center mt-5 display-4">
                    Bài tập game xuất sắc
                </div>
                <div className="row text-center mt-5">
                    <div className="col-5">
                        <button className="btnGame" onClick={() => {
                            this.props.datCuoc(true);
                        }}>tài</button>
                    </div>
                    <div className="col-2">
                        <XuatSac />

                    </div>
                    <div className="col-5">
                        <button className="btnGame" onClick={() => {
                            this.props.datCuoc(false);
                        }}>xỉu</button>
                    </div>
                </div>
                <div className="thongTinTroChoi text-center ">
                    <ThongTinTroChoi />
                    <button className="btn btn-primary p-2 display-4 mt-3" onClick={() =>{
                        this.props.playGame();
                    }}>play game</button>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (taiXiu) => {
            //tạo action tai xỉu
            let action = {
                type: 'DAT_CUOC',
                taiXiu
            }
            //Gửi lên reducer
            dispatch(action);
        },
        playGame:()=>{
            
            let action ={
                type: 'PLAY_GAME',

            }
            dispatch(action);
        }
    }
}


export default connect(null,mapDispatchToProps)(BaiTapGameXuatSacRedux);